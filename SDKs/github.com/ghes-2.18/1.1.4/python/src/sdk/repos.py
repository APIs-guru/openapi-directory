import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Repos:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def repos_accept_invitation(self, request: operations.ReposAcceptInvitationRequest) -> operations.ReposAcceptInvitationResponse:
        r"""Accept a repository invitation
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#accept-a-repository-invitation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/repository_invitations/{invitation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposAcceptInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_add_collaborator(self, request: operations.ReposAddCollaboratorRequest) -> operations.ReposAddCollaboratorResponse:
        r"""Add a repository collaborator
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        
        For more information the permission levels, see \"[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)\".
        
        Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#http-verbs).\"
        
        The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#invitations).
        
        **Rate limits**
        
        To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#add-a-repository-collaborator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/collaborators/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposAddCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryInvitation])
                res.repository_invitation = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_add_status_check_contexts(self, request: operations.ReposAddStatusCheckContextsRequest) -> operations.ReposAddStatusCheckContextsResponse:
        r"""Add status check contexts
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#add-status-check-contexts - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposAddStatusCheckContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.repos_add_status_check_contexts_200_application_json_strings = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_add_team_access_restrictions(self, request: operations.ReposAddTeamAccessRestrictionsRequest) -> operations.ReposAddTeamAccessRestrictionsResponse:
        r"""Add team access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Grants the specified teams push access for this branch. You can also give push access to child teams.
        
        | Type    | Description                                                                                                                                |
        | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
        | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#add-team-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposAddTeamAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_add_user_access_restrictions(self, request: operations.ReposAddUserAccessRestrictionsRequest) -> operations.ReposAddUserAccessRestrictionsResponse:
        r"""Add user access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Grants the specified people push access for this branch.
        
        | Type    | Description                                                                                                                   |
        | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
        | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#add-user-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposAddUserAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_check_collaborator(self, request: operations.ReposCheckCollaboratorRequest) -> operations.ReposCheckCollaboratorResponse:
        r"""Check if a user is a repository collaborator
        For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
        
        Team members will include the members of child teams.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#check-if-a-user-is-a-repository-collaborator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/collaborators/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCheckCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def repos_compare_commits(self, request: operations.ReposCompareCommitsRequest) -> operations.ReposCompareCommitsResponse:
        r"""Compare two commits
        The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.
        
        The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
        
        The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
        
        **Working with large comparisons**
        
        The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-commits) to enumerate all commits in the range.
        
        For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long
        to generate. You can typically resolve this error by using a smaller commit range.
        
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#compare-two-commits - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/compare/{basehead}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCompareCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitComparison])
                res.commit_comparison = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_create_commit_comment(self, request: operations.ReposCreateCommitCommentRequest) -> operations.ReposCreateCommitCommentResponse:
        r"""Create a commit comment
        Create a comment for a commit using its `:commit_sha`.
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-commit-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{commit_sha}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitComment])
                res.commit_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_commit_signature_protection(self, request: operations.ReposCreateCommitSignatureProtectionRequest) -> operations.ReposCreateCommitSignatureProtectionResponse:
        r"""Create commit signature protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-commit-signature-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateCommitSignatureProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranchAdminEnforced])
                res.protected_branch_admin_enforced = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_create_commit_status(self, request: operations.ReposCreateCommitStatusRequest) -> operations.ReposCreateCommitStatusResponse:
        r"""Create a commit status
        Users with push access in a repository can create commit statuses for a given SHA.
        
        Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-commit-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/statuses/{sha}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateCommitStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Status])
                res.status = out

        return res

    
    def repos_create_deploy_key(self, request: operations.ReposCreateDeployKeyRequest) -> operations.ReposCreateDeployKeyResponse:
        r"""Create a deploy key
        You can create a read-only deploy key.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-deploy-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/keys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateDeployKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeployKey])
                res.deploy_key = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_deployment(self, request: operations.ReposCreateDeploymentRequest) -> operations.ReposCreateDeploymentResponse:
        r"""Create a deployment
        Deployments offer a few configurable parameters with certain defaults.
        
        The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them
        before we merge a pull request.
        
        The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
        multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
        makes it easier to track which environments have requested deployments. The default environment is `production`.
        
        The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
        the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
        the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
        return a failure response.
        
        By default, [commit statuses](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#statuses) for every submitted context must be in a `success`
        state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
        specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
        not require any contexts or create any commit statuses, the deployment will always succeed.
        
        The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
        field that will be passed on when a deployment event is dispatched.
        
        The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
        be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
        application with debugging enabled.
        
        Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
        
        #### Merged branch response
        You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
        a deployment. This auto-merge happens when:
        *   Auto-merge option is enabled in the repository
        *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
        *   There are no merge conflicts
        
        If there are no new commits in the base branch, a new request to create a deployment should give a successful
        response.
        
        #### Merge conflict response
        This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
        be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
        
        #### Failed commit status checks
        This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
        status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-deployment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/deployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deployment])
                res.deployment = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposCreateDeployment202ApplicationJSON])
                res.repos_create_deployment_202_application_json_object = out
        elif r.status_code == 409:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_deployment_status(self, request: operations.ReposCreateDeploymentStatusRequest) -> operations.ReposCreateDeploymentStatusResponse:
        r"""Create a deployment status
        Users with `push` access can create deployment statuses for a given deployment.
        
        GitHub Apps require `read & write` access to \"Deployments\" and `read-only` access to \"Repo contents\" (for private repos). OAuth Apps require the `repo_deployment` scope.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-deployment-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateDeploymentStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeploymentStatus])
                res.deployment_status = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_for_authenticated_user(self, request: operations.ReposCreateForAuthenticatedUserRequest) -> operations.ReposCreateForAuthenticatedUserResponse:
        r"""Create a repository for the authenticated user
        Creates a new repository for the authenticated user.
        
        **OAuth scope requirements**
        
        When using [OAuth](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
        
        *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
        *   `repo` scope to create a private repository.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-repository-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/repos"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Repository])
                res.repository = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_fork(self, request: operations.ReposCreateForkRequest) -> operations.ReposCreateForkResponse:
        r"""Create a fork
        Create a fork for the authenticated user.
        
        **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact) or [GitHub Enterprise Server Premium Support](https://premium.githubsupport.com).
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-fork - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/forks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateForkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FullRepository])
                res.full_repository = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_in_org(self, request: operations.ReposCreateInOrgRequest) -> operations.ReposCreateInOrgResponse:
        r"""Create an organization repository
        Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
        
        **OAuth scope requirements**
        
        When using [OAuth](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
        
        *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
        *   `repo` scope to create a private repository
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-an-organization-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/repos", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Repository])
                res.repository = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_or_update_file_contents(self, request: operations.ReposCreateOrUpdateFileContentsRequest) -> operations.ReposCreateOrUpdateFileContentsResponse:
        r"""Create or update file contents
        Creates a new file or replaces an existing file in a repository.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-or-update-file-contents - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/contents/{path}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateOrUpdateFileContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileCommit])
                res.file_commit = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileCommit])
                res.file_commit = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_pages_site(self, request: operations.ReposCreatePagesSiteRequest) -> operations.ReposCreatePagesSiteResponse:
        r"""Create a GitHub Pages site
        Configures a GitHub Enterprise Server Pages site. For more information, see \"[About GitHub Pages](/github/working-with-github-pages/about-github-pages).\"
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-github-pages-site - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreatePagesSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposCreatePagesSite415ApplicationJSON])
                res.repos_create_pages_site_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_release(self, request: operations.ReposCreateReleaseRequest) -> operations.ReposCreateReleaseResponse:
        r"""Create a release
        Users with push access to the repository can create a release.
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-release - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Release])
                res.release = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_create_using_template(self, request: operations.ReposCreateUsingTemplateRequest) -> operations.ReposCreateUsingTemplateResponse:
        r"""Create a repository using a template
        Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
        
        **OAuth scope requirements**
        
        When using [OAuth](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
        
        *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
        *   `repo` scope to create a private repository
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-repository-using-a-template - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{template_owner}/{template_repo}/generate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateUsingTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Repository])
                res.repository = out

        return res

    
    def repos_create_webhook(self, request: operations.ReposCreateWebhookRequest) -> operations.ReposCreateWebhookResponse:
        r"""Create a repository webhook
        Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
        share the same `config` as long as those webhooks do not have any `events` that overlap.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-repository-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposCreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_decline_invitation(self, request: operations.ReposDeclineInvitationRequest) -> operations.ReposDeclineInvitationResponse:
        r"""Decline a repository invitation
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#decline-a-repository-invitation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/repository_invitations/{invitation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeclineInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete(self, request: operations.ReposDeleteRequest) -> operations.ReposDeleteResponse:
        r"""Delete a repository
        Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
        
        If an organization owner has configured the organization to prevent members from deleting organization-owned
        repositories, you will get a `403 Forbidden` response.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 307:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposDelete403ApplicationJSON])
                res.repos_delete_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete_access_restrictions(self, request: operations.ReposDeleteAccessRestrictionsRequest) -> operations.ReposDeleteAccessRestrictionsResponse:
        r"""Delete access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Disables the ability to restrict who can push to this branch.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_delete_admin_branch_protection(self, request: operations.ReposDeleteAdminBranchProtectionRequest) -> operations.ReposDeleteAdminBranchProtectionResponse:
        r"""Delete admin branch protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-admin-branch-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteAdminBranchProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete_branch_protection(self, request: operations.ReposDeleteBranchProtectionRequest) -> operations.ReposDeleteBranchProtectionResponse:
        r"""Delete branch protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-branch-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteBranchProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete_commit_comment(self, request: operations.ReposDeleteCommitCommentRequest) -> operations.ReposDeleteCommitCommentResponse:
        r"""Delete a commit comment
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-commit-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete_commit_signature_protection(self, request: operations.ReposDeleteCommitSignatureProtectionRequest) -> operations.ReposDeleteCommitSignatureProtectionResponse:
        r"""Delete commit signature protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-commit-signature-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteCommitSignatureProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete_deploy_key(self, request: operations.ReposDeleteDeployKeyRequest) -> operations.ReposDeleteDeployKeyResponse:
        r"""Delete a deploy key
        Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-deploy-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/keys/{key_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteDeployKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_delete_file(self, request: operations.ReposDeleteFileRequest) -> operations.ReposDeleteFileResponse:
        r"""Delete a file
        Deletes a file in a repository.
        
        You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
        
        The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
        
        You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-file - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/contents/{path}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileCommit])
                res.file_commit = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposDeleteFile503ApplicationJSON])
                res.repos_delete_file_503_application_json_object = out

        return res

    
    def repos_delete_invitation(self, request: operations.ReposDeleteInvitationRequest) -> operations.ReposDeleteInvitationResponse:
        r"""Delete a repository invitation
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-repository-invitation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/invitations/{invitation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_delete_pages_site(self, request: operations.ReposDeletePagesSiteRequest) -> operations.ReposDeletePagesSiteResponse:
        r"""Delete a GitHub Enterprise Server Pages site
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-github-pages-site - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeletePagesSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposDeletePagesSite415ApplicationJSON])
                res.repos_delete_pages_site_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_delete_pull_request_review_protection(self, request: operations.ReposDeletePullRequestReviewProtectionRequest) -> operations.ReposDeletePullRequestReviewProtectionResponse:
        r"""Delete pull request review protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-pull-request-review-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeletePullRequestReviewProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_delete_release(self, request: operations.ReposDeleteReleaseRequest) -> operations.ReposDeleteReleaseResponse:
        r"""Delete a release
        Users with push access to the repository can delete a release.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-release - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/{release_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_delete_release_asset(self, request: operations.ReposDeleteReleaseAssetRequest) -> operations.ReposDeleteReleaseAssetResponse:
        r"""Delete a release asset
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-release-asset - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/assets/{asset_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteReleaseAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_delete_webhook(self, request: operations.ReposDeleteWebhookRequest) -> operations.ReposDeleteWebhookResponse:
        r"""Delete a repository webhook
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#delete-a-repository-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks/{hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_download_tarball_archive(self, request: operations.ReposDownloadTarballArchiveRequest) -> operations.ReposDownloadTarballArchiveResponse:
        r"""Download a repository archive (tar)
        Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
        `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
        the `Location` header to make a second `GET` request.
        **Note**: For private repositories, these links are temporary and expire after five minutes.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#download-a-repository-archive - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/tarball/{ref}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDownloadTarballArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            

        return res

    
    def repos_download_zipball_archive(self, request: operations.ReposDownloadZipballArchiveRequest) -> operations.ReposDownloadZipballArchiveResponse:
        r"""Download a repository archive (zip)
        Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
        `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
        the `Location` header to make a second `GET` request.
        **Note**: For private repositories, these links are temporary and expire after five minutes.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#download-a-repository-archive - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/zipball/{ref}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposDownloadZipballArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            

        return res

    
    def repos_get(self, request: operations.ReposGetRequest) -> operations.ReposGetResponse:
        r"""Get a repository
        When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
        
        The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FullRepository])
                res.full_repository = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_access_restrictions(self, request: operations.ReposGetAccessRestrictionsRequest) -> operations.ReposGetAccessRestrictionsResponse:
        r"""Get access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Lists who has access to this protected branch.
        
        **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchRestrictionPolicy])
                res.branch_restriction_policy = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_admin_branch_protection(self, request: operations.ReposGetAdminBranchProtectionRequest) -> operations.ReposGetAdminBranchProtectionResponse:
        r"""Get admin branch protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-admin-branch-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetAdminBranchProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranchAdminEnforced])
                res.protected_branch_admin_enforced = out

        return res

    
    def repos_get_all_status_check_contexts(self, request: operations.ReposGetAllStatusCheckContextsRequest) -> operations.ReposGetAllStatusCheckContextsResponse:
        r"""Get all status check contexts
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-all-status-check-contexts - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetAllStatusCheckContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.repos_get_all_status_check_contexts_200_application_json_strings = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_all_topics(self, request: operations.ReposGetAllTopicsRequest) -> operations.ReposGetAllTopicsResponse:
        r"""Get all repository topics
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-all-repository-topics - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetAllTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposGetAllTopics415ApplicationJSON])
                res.repos_get_all_topics_415_application_json_object = out

        return res

    
    def repos_get_branch(self, request: operations.ReposGetBranchRequest) -> operations.ReposGetBranchResponse:
        r"""Get a branch
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-branch - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchWithProtection])
                res.branch_with_protection = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposGetBranch415ApplicationJSON])
                res.repos_get_branch_415_application_json_object = out

        return res

    
    def repos_get_branch_protection(self, request: operations.ReposGetBranchProtectionRequest) -> operations.ReposGetBranchProtectionResponse:
        r"""Get branch protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-branch-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetBranchProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BranchProtection])
                res.branch_protection = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_code_frequency_stats(self, request: operations.ReposGetCodeFrequencyStatsRequest) -> operations.ReposGetCodeFrequencyStatsResponse:
        r"""Get the weekly commit activity
        Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-the-weekly-commit-activity - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/stats/code_frequency", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCodeFrequencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[List[int]]])
                res.code_frequency_stats = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.repos_get_code_frequency_stats_202_application_json_object = out
        elif r.status_code == 204:
            pass

        return res

    
    def repos_get_collaborator_permission_level(self, request: operations.ReposGetCollaboratorPermissionLevelRequest) -> operations.ReposGetCollaboratorPermissionLevelResponse:
        r"""Get repository permissions for a user
        Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-repository-permissions-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/collaborators/{username}/permission", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCollaboratorPermissionLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryCollaboratorPermission])
                res.repository_collaborator_permission = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_combined_status_for_ref(self, request: operations.ReposGetCombinedStatusForRefRequest) -> operations.ReposGetCombinedStatusForRefResponse:
        r"""Get the combined status for a specific reference
        Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
        
        The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.
        
        Additionally, a combined `state` is returned. The `state` is one of:
        
        *   **failure** if any of the contexts report as `error` or `failure`
        *   **pending** if there are no statuses or a context is `pending`
        *   **success** if the latest status for all contexts is `success`
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-the-combined-status-for-a-specific-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{ref}/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCombinedStatusForRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CombinedCommitStatus])
                res.combined_commit_status = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_commit(self, request: operations.ReposGetCommitRequest) -> operations.ReposGetCommitResponse:
        r"""Get a commit
        Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
        
        **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
        
        You can pass the appropriate [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
        
        To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
        
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-commit - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{ref}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Commit])
                res.commit = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_commit_activity_stats(self, request: operations.ReposGetCommitActivityStatsRequest) -> operations.ReposGetCommitActivityStatsResponse:
        r"""Get the last year of commit activity
        Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-the-last-year-of-commit-activity - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/stats/commit_activity", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCommitActivityStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommitActivity]])
                res.commit_activities = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.repos_get_commit_activity_stats_202_application_json_object = out
        elif r.status_code == 204:
            pass

        return res

    
    def repos_get_commit_comment(self, request: operations.ReposGetCommitCommentRequest) -> operations.ReposGetCommitCommentResponse:
        r"""Get a commit comment
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-commit-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitComment])
                res.commit_comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_commit_signature_protection(self, request: operations.ReposGetCommitSignatureProtectionRequest) -> operations.ReposGetCommitSignatureProtectionResponse:
        r"""Get commit signature protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.
        
        **Note**: You must enable branch protection to require signed commits.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-commit-signature-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetCommitSignatureProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranchAdminEnforced])
                res.protected_branch_admin_enforced = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_content(self, request: operations.ReposGetContentRequest) -> operations.ReposGetContentResponse:
        r"""Get repository content
        Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
        `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 
        
        Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#custom-media-types) for
        retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
        type](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
        object format.
        
        **Note**:
        *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@2.18/rest/reference/git#trees).
        *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
        API](https://docs.github.com/enterprise-server@2.18/rest/reference/git#get-a-tree).
        *   This API supports files up to 1 megabyte in size.
        
        #### If the content is a directory
        The response will be an array of objects, one object for each item in the directory.
        When listing the contents of a directory, submodules have their \"type\" specified as \"file\". Logically, the value
        _should_ be \"submodule\". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
        In the next major version of the API, the type will be returned as \"submodule\".
        
        #### If the content is a symlink 
        If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
        API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object 
        describing the symlink itself.
        
        #### If the content is a submodule
        The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
        commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
        the submodule at that specific commit.
        
        If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links[\"git\"]`) and the
        github.com URLs (`html_url` and `_links[\"html\"]`) will have null values.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-repository-content - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/contents/{path}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.repos_get_content_200_application_json_one_of = out
            if utils.match_content_type(content_type, "application/vnd.github.v3.object"):
                res.body = r.content
        elif r.status_code == 302:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_contributors_stats(self, request: operations.ReposGetContributorsStatsRequest) -> operations.ReposGetContributorsStatsResponse:
        r"""Get all contributor commit activity
        
        Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
        
        *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
        *   `a` - Number of additions
        *   `d` - Number of deletions
        *   `c` - Number of commits
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-all-contributor-commit-activity - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/stats/contributors", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetContributorsStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ContributorActivity]])
                res.contributor_activities = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.repos_get_contributors_stats_202_application_json_object = out
        elif r.status_code == 204:
            pass

        return res

    
    def repos_get_deploy_key(self, request: operations.ReposGetDeployKeyRequest) -> operations.ReposGetDeployKeyResponse:
        r"""Get a deploy key
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-deploy-key - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/keys/{key_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetDeployKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeployKey])
                res.deploy_key = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_deployment(self, request: operations.ReposGetDeploymentRequest) -> operations.ReposGetDeploymentResponse:
        r"""Get a deployment
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-deployment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/deployments/{deployment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetDeploymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deployment])
                res.deployment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_deployment_status(self, request: operations.ReposGetDeploymentStatusRequest) -> operations.ReposGetDeploymentStatusResponse:
        r"""Get a deployment status
        Users with pull access can view a deployment status for a deployment:
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-deployment-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetDeploymentStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeploymentStatus])
                res.deployment_status = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposGetDeploymentStatus415ApplicationJSON])
                res.repos_get_deployment_status_415_application_json_object = out

        return res

    
    def repos_get_latest_pages_build(self, request: operations.ReposGetLatestPagesBuildRequest) -> operations.ReposGetLatestPagesBuildResponse:
        r"""Get latest Pages build
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-latest-pages-build - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages/builds/latest", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetLatestPagesBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageBuild])
                res.page_build = out

        return res

    
    def repos_get_latest_release(self, request: operations.ReposGetLatestReleaseRequest) -> operations.ReposGetLatestReleaseResponse:
        r"""Get the latest release
        View the latest published full release for the repository.
        
        The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-the-latest-release - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/latest", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetLatestReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Release])
                res.release = out

        return res

    
    def repos_get_pages(self, request: operations.ReposGetPagesRequest) -> operations.ReposGetPagesResponse:
        r"""Get a GitHub Enterprise Server Pages site
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-github-pages-site - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_pages_build(self, request: operations.ReposGetPagesBuildRequest) -> operations.ReposGetPagesBuildResponse:
        r"""Get GitHub Enterprise Server Pages build
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-github-pages-build - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages/builds/{build_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetPagesBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageBuild])
                res.page_build = out

        return res

    
    def repos_get_participation_stats(self, request: operations.ReposGetParticipationStatsRequest) -> operations.ReposGetParticipationStatsResponse:
        r"""Get the weekly commit count
        Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
        
        The array order is oldest week (index 0) to most recent week.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-the-weekly-commit-count - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/stats/participation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetParticipationStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ParticipationStats])
                res.participation_stats = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_pull_request_review_protection(self, request: operations.ReposGetPullRequestReviewProtectionRequest) -> operations.ReposGetPullRequestReviewProtectionResponse:
        r"""Get pull request review protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-pull-request-review-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetPullRequestReviewProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranchPullRequestReview])
                res.protected_branch_pull_request_review = out

        return res

    
    def repos_get_punch_card_stats(self, request: operations.ReposGetPunchCardStatsRequest) -> operations.ReposGetPunchCardStatsResponse:
        r"""Get the hourly commit count for each day
        Each array contains the day number, hour number, and number of commits:
        
        *   `0-6`: Sunday - Saturday
        *   `0-23`: Hour of day
        *   Number of commits
        
        For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-the-hourly-commit-count-for-each-day - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/stats/punch_card", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetPunchCardStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[List[int]]])
                res.code_frequency_stats = out
        elif r.status_code == 204:
            pass

        return res

    
    def repos_get_readme(self, request: operations.ReposGetReadmeRequest) -> operations.ReposGetReadmeResponse:
        r"""Get a repository README
        Gets the preferred README for a repository.
        
        READMEs support [custom media types](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-repository-readme - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/readme", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetReadmeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentFile])
                res.content_file = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_get_readme_in_directory(self, request: operations.ReposGetReadmeInDirectoryRequest) -> operations.ReposGetReadmeInDirectoryResponse:
        r"""Get a repository README for a directory
        Gets the README from a repository directory.
        
        READMEs support [custom media types](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-repository-directory-readme - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/readme/{dir}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetReadmeInDirectoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentFile])
                res.content_file = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_get_release(self, request: operations.ReposGetReleaseRequest) -> operations.ReposGetReleaseResponse:
        r"""Get a release
        **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#hypermedia).
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-release - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/{release_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Release])
                res.release = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_release_asset(self, request: operations.ReposGetReleaseAssetRequest) -> operations.ReposGetReleaseAssetResponse:
        r"""Get a release asset
        To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-release-asset - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/assets/{asset_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetReleaseAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseAsset])
                res.release_asset = out
        elif r.status_code == 302:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposGetReleaseAsset415ApplicationJSON])
                res.repos_get_release_asset_415_application_json_object = out

        return res

    
    def repos_get_release_by_tag(self, request: operations.ReposGetReleaseByTagRequest) -> operations.ReposGetReleaseByTagResponse:
        r"""Get a release by tag name
        Get a published release with the specified tag.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-release-by-tag-name - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/tags/{tag}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetReleaseByTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Release])
                res.release = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_status_checks_protection(self, request: operations.ReposGetStatusChecksProtectionRequest) -> operations.ReposGetStatusChecksProtectionResponse:
        r"""Get status checks protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-status-checks-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetStatusChecksProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatusCheckPolicy])
                res.status_check_policy = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_teams_with_access_to_protected_branch(self, request: operations.ReposGetTeamsWithAccessToProtectedBranchRequest) -> operations.ReposGetTeamsWithAccessToProtectedBranchResponse:
        r"""Get teams with access to the protected branch
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Lists the teams who have push access to this branch. The list includes child teams.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-teams-with-access-to-the-protected-branch - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetTeamsWithAccessToProtectedBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_users_with_access_to_protected_branch(self, request: operations.ReposGetUsersWithAccessToProtectedBranchRequest) -> operations.ReposGetUsersWithAccessToProtectedBranchResponse:
        r"""Get users with access to the protected branch
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Lists the people who have push access to this branch.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-users-with-access-to-the-protected-branch - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetUsersWithAccessToProtectedBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_get_webhook(self, request: operations.ReposGetWebhookRequest) -> operations.ReposGetWebhookResponse:
        r"""Get a repository webhook
        Returns a webhook configured in a repository. To get only the webhook `config` properties, see \"[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository).\"
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-a-repository-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks/{hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposGetWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_branches(self, request: operations.ReposListBranchesRequest) -> operations.ReposListBranchesResponse:
        r"""List branches
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-branches - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListBranchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ShortBranch]])
                res.short_branches = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_branches_for_head_commit(self, request: operations.ReposListBranchesForHeadCommitRequest) -> operations.ReposListBranchesForHeadCommitResponse:
        r"""List branches for HEAD commit
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-branches-for-head-commit - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListBranchesForHeadCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BranchShort]])
                res.branch_shorts = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposListBranchesForHeadCommit415ApplicationJSON])
                res.repos_list_branches_for_head_commit_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_list_collaborators(self, request: operations.ReposListCollaboratorsRequest) -> operations.ReposListCollaboratorsResponse:
        r"""List repository collaborators
        For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
        
        Team members will include the members of child teams.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-collaborators - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/collaborators", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListCollaboratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Collaborator]])
                res.collaborators = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_comments_for_commit(self, request: operations.ReposListCommentsForCommitRequest) -> operations.ReposListCommentsForCommitResponse:
        r"""List commit comments
        Use the `:commit_sha` to specify the commit that will have its comments listed.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-commit-comments - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{commit_sha}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListCommentsForCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommitComment]])
                res.commit_comments = out

        return res

    
    def repos_list_commit_comments_for_repo(self, request: operations.ReposListCommitCommentsForRepoRequest) -> operations.ReposListCommitCommentsForRepoResponse:
        r"""List commit comments for a repository
        Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/).
        
        Comments are ordered by ascending ID.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-commit-comments-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListCommitCommentsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CommitComment]])
                res.commit_comments = out

        return res

    
    def repos_list_commit_statuses_for_ref(self, request: operations.ReposListCommitStatusesForRefRequest) -> operations.ReposListCommitStatusesForRefResponse:
        r"""List commit statuses for a reference
        Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
        
        This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-commit-statuses-for-a-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{ref}/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListCommitStatusesForRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Status]])
                res.statuses = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_commits(self, request: operations.ReposListCommitsRequest) -> operations.ReposListCommitsResponse:
        r"""List commits
        **Signature verification object**
        
        The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
        
        | Name | Type | Description |
        | ---- | ---- | ----------- |
        | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
        | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
        | `signature` | `string` | The signature that was extracted from the commit. |
        | `payload` | `string` | The value that was signed. |
        
        These are the possible values for `reason` in the `verification` object:
        
        | Value | Description |
        | ----- | ----------- |
        | `expired_key` | The key that made the signature is expired. |
        | `not_signing_key` | The \"signing\" flag is not among the usage flags in the GPG key that made the signature. |
        | `gpgverify_error` | There was an error communicating with the signature verification service. |
        | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
        | `unsigned` | The object does not include a signature. |
        | `unknown_signature_type` | A non-PGP signature was found in the commit. |
        | `no_user` | No user was associated with the `committer` email address in the commit. |
        | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
        | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
        | `unknown_key` | The key that made the signature has not been registered with any user's account. |
        | `malformed_signature` | There was an error parsing the signature. |
        | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
        | `valid` | None of the above errors applied, so the signature is considered to be verified. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-commits - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Commit]])
                res.commits = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_contributors(self, request: operations.ReposListContributorsRequest) -> operations.ReposListContributorsResponse:
        r"""List repository contributors
        Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
        
        GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-contributors - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/contributors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListContributorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Contributor]])
                res.contributors = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_deploy_keys(self, request: operations.ReposListDeployKeysRequest) -> operations.ReposListDeployKeysResponse:
        r"""List deploy keys
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-deploy-keys - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListDeployKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DeployKey]])
                res.deploy_keys = out

        return res

    
    def repos_list_deployment_statuses(self, request: operations.ReposListDeploymentStatusesRequest) -> operations.ReposListDeploymentStatusesResponse:
        r"""List deployment statuses
        Users with pull access can view deployment statuses for a deployment:
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-deployment-statuses - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListDeploymentStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DeploymentStatus]])
                res.deployment_statuses = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_deployments(self, request: operations.ReposListDeploymentsRequest) -> operations.ReposListDeploymentsResponse:
        r"""List deployments
        Simple filtering of deployments is available via query parameters:
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-deployments - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListDeploymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Deployment]])
                res.deployments = out

        return res

    
    def repos_list_for_authenticated_user(self, request: operations.ReposListForAuthenticatedUserRequest) -> operations.ReposListForAuthenticatedUserResponse:
        r"""List repositories for the authenticated user
        Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
        
        The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repositories-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/repos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Repository]])
                res.repositories = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_list_for_org(self, request: operations.ReposListForOrgRequest) -> operations.ReposListForOrgResponse:
        r"""List organization repositories
        Lists repositories for the specified organization.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-organization-repositories - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/repos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out

        return res

    
    def repos_list_for_user(self, request: operations.ReposListForUserRequest) -> operations.ReposListForUserResponse:
        r"""List repositories for a user
        Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repositories-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/repos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out

        return res

    
    def repos_list_forks(self, request: operations.ReposListForksRequest) -> operations.ReposListForksResponse:
        r"""List forks
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-forks - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/forks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListForksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out

        return res

    
    def repos_list_invitations(self, request: operations.ReposListInvitationsRequest) -> operations.ReposListInvitationsResponse:
        r"""List repository invitations
        When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-invitations - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/invitations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListInvitationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RepositoryInvitation]])
                res.repository_invitations = out

        return res

    
    def repos_list_invitations_for_authenticated_user(self, request: operations.ReposListInvitationsForAuthenticatedUserRequest) -> operations.ReposListInvitationsForAuthenticatedUserResponse:
        r"""List repository invitations for the authenticated user
        When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-invitations-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/repository_invitations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListInvitationsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RepositoryInvitation]])
                res.repository_invitations = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_languages(self, request: operations.ReposListLanguagesRequest) -> operations.ReposListLanguagesResponse:
        r"""List repository languages
        Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-languages - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/languages", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, int]])
                res.language = out

        return res

    
    def repos_list_pages_builds(self, request: operations.ReposListPagesBuildsRequest) -> operations.ReposListPagesBuildsResponse:
        r"""List GitHub Enterprise Server Pages builds
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-github-pages-builds - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages/builds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListPagesBuildsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PageBuild]])
                res.page_builds = out

        return res

    
    def repos_list_public(self, request: operations.ReposListPublicRequest) -> operations.ReposListPublicResponse:
        r"""List public repositories
        Lists all public repositories in the order that they were created.
        
        Note:
        - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
        - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-public-repositories - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/repositories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListPublicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_list_pull_requests_associated_with_commit(self, request: operations.ReposListPullRequestsAssociatedWithCommitRequest) -> operations.ReposListPullRequestsAssociatedWithCommitResponse:
        r"""List pull requests associated with a commit
        Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#list-pull-requests) endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-pull-requests-associated-with-a-commit - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{commit_sha}/pulls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListPullRequestsAssociatedWithCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PullRequestSimple]])
                res.pull_request_simples = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposListPullRequestsAssociatedWithCommit415ApplicationJSON])
                res.repos_list_pull_requests_associated_with_commit_415_application_json_object = out

        return res

    
    def repos_list_release_assets(self, request: operations.ReposListReleaseAssetsRequest) -> operations.ReposListReleaseAssetsResponse:
        r"""List release assets
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-release-assets - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/{release_id}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListReleaseAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReleaseAsset]])
                res.release_assets = out

        return res

    
    def repos_list_releases(self, request: operations.ReposListReleasesRequest) -> operations.ReposListReleasesResponse:
        r"""List releases
        This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-tags).
        
        Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-releases - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListReleasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Release]])
                res.releases = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_list_tags(self, request: operations.ReposListTagsRequest) -> operations.ReposListTagsResponse:
        r"""List repository tags
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-tags - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tag]])
                res.tags = out

        return res

    
    def repos_list_teams(self, request: operations.ReposListTeamsRequest) -> operations.ReposListTeamsResponse:
        r"""List repository teams
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-teams - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/teams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out

        return res

    
    def repos_list_webhooks(self, request: operations.ReposListWebhooksRequest) -> operations.ReposListWebhooksResponse:
        r"""List repository webhooks
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-repository-webhooks - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposListWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Hook]])
                res.hooks = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_merge(self, request: operations.ReposMergeRequest) -> operations.ReposMergeResponse:
        r"""Merge a branch
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#merge-a-branch - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/merges", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposMergeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Commit])
                res.commit = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_ping_webhook(self, request: operations.ReposPingWebhookRequest) -> operations.ReposPingWebhookResponse:
        r"""Ping a repository webhook
        This will trigger a [ping event](https://docs.github.com/enterprise-server@2.18/webhooks/#ping-event) to be sent to the hook.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#ping-a-repository-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks/{hook_id}/pings", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposPingWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_remove_collaborator(self, request: operations.ReposRemoveCollaboratorRequest) -> operations.ReposRemoveCollaboratorResponse:
        r"""Remove a repository collaborator
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#remove-a-repository-collaborator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/collaborators/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposRemoveCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_remove_status_check_contexts(self, request: operations.ReposRemoveStatusCheckContextsRequest) -> operations.ReposRemoveStatusCheckContextsResponse:
        r"""Remove status check contexts
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#remove-status-check-contexts - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposRemoveStatusCheckContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.repos_remove_status_check_contexts_200_application_json_strings = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_remove_status_check_protection(self, request: operations.ReposRemoveStatusCheckProtectionRequest) -> operations.ReposRemoveStatusCheckProtectionResponse:
        r"""Remove status check protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#remove-status-check-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposRemoveStatusCheckProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def repos_remove_team_access_restrictions(self, request: operations.ReposRemoveTeamAccessRestrictionsRequest) -> operations.ReposRemoveTeamAccessRestrictionsResponse:
        r"""Remove team access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Removes the ability of a team to push to this branch. You can also remove push access for child teams.
        
        | Type    | Description                                                                                                                                         |
        | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
        | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#remove-team-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposRemoveTeamAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_remove_user_access_restrictions(self, request: operations.ReposRemoveUserAccessRestrictionsRequest) -> operations.ReposRemoveUserAccessRestrictionsResponse:
        r"""Remove user access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Removes the ability of a user to push to this branch.
        
        | Type    | Description                                                                                                                                   |
        | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
        | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#remove-user-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposRemoveUserAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_replace_all_topics(self, request: operations.ReposReplaceAllTopicsRequest) -> operations.ReposReplaceAllTopicsResponse:
        r"""Replace all repository topics
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#replace-all-repository-topics - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/topics", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposReplaceAllTopicsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposReplaceAllTopics415ApplicationJSON])
                res.repos_replace_all_topics_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def repos_request_pages_build(self, request: operations.ReposRequestPagesBuildRequest) -> operations.ReposRequestPagesBuildResponse:
        r"""Request a GitHub Enterprise Server Pages build
        You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
        
        Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#request-a-github-pages-build - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages/builds", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposRequestPagesBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageBuildStatus])
                res.page_build_status = out

        return res

    
    def repos_set_admin_branch_protection(self, request: operations.ReposSetAdminBranchProtectionRequest) -> operations.ReposSetAdminBranchProtectionResponse:
        r"""Set admin branch protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#set-admin-branch-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposSetAdminBranchProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranchAdminEnforced])
                res.protected_branch_admin_enforced = out

        return res

    
    def repos_set_status_check_contexts(self, request: operations.ReposSetStatusCheckContextsRequest) -> operations.ReposSetStatusCheckContextsResponse:
        r"""Set status check contexts
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#set-status-check-contexts - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposSetStatusCheckContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.repos_set_status_check_contexts_200_application_json_strings = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_set_team_access_restrictions(self, request: operations.ReposSetTeamAccessRestrictionsRequest) -> operations.ReposSetTeamAccessRestrictionsResponse:
        r"""Set team access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
        
        | Type    | Description                                                                                                                                |
        | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
        | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#set-team-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposSetTeamAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_set_user_access_restrictions(self, request: operations.ReposSetUserAccessRestrictionsRequest) -> operations.ReposSetUserAccessRestrictionsResponse:
        r"""Set user access restrictions
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
        
        | Type    | Description                                                                                                                   |
        | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
        | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#set-user-access-restrictions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposSetUserAccessRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_test_push_webhook(self, request: operations.ReposTestPushWebhookRequest) -> operations.ReposTestPushWebhookResponse:
        r"""Test the push repository webhook
        This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
        
        **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#test-the-push-repository-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks/{hook_id}/tests", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposTestPushWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_transfer(self, request: operations.ReposTransferRequest) -> operations.ReposTransferResponse:
        r"""Transfer a repository
        A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#transfer-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/transfer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MinimalRepository])
                res.minimal_repository = out

        return res

    
    def repos_update(self, request: operations.ReposUpdateRequest) -> operations.ReposUpdateResponse:
        r"""Update a repository
        **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#replace-all-repository-topics) endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos/#update-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FullRepository])
                res.full_repository = out
        elif r.status_code == 307:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_update_branch_protection(self, request: operations.ReposUpdateBranchProtectionRequest) -> operations.ReposUpdateBranchProtectionResponse:
        r"""Update branch protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Protecting a branch requires admin or owner permissions to the repository.
        
        **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
        
        **Note**: The list of users, apps, and teams in total is limited to 100 items.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-branch-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateBranchProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranch])
                res.protected_branch = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReposUpdateBranchProtection415ApplicationJSON])
                res.repos_update_branch_protection_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def repos_update_commit_comment(self, request: operations.ReposUpdateCommitCommentRequest) -> operations.ReposUpdateCommitCommentResponse:
        r"""Update a commit comment
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-a-commit-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments/{comment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitComment])
                res.commit_comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def repos_update_information_about_pages_site(self, request: operations.ReposUpdateInformationAboutPagesSiteRequest) -> operations.ReposUpdateInformationAboutPagesSiteResponse:
        r"""Update information about a GitHub Pages site
        Updates information for a GitHub Enterprise Server Pages site. For more information, see \"[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-information-about-a-github-pages-site - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateInformationAboutPagesSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_update_invitation(self, request: operations.ReposUpdateInvitationRequest) -> operations.ReposUpdateInvitationResponse:
        r"""Update a repository invitation
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-a-repository-invitation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/invitations/{invitation_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepositoryInvitation])
                res.repository_invitation = out

        return res

    
    def repos_update_pull_request_review_protection(self, request: operations.ReposUpdatePullRequestReviewProtectionRequest) -> operations.ReposUpdatePullRequestReviewProtectionResponse:
        r"""Update pull request review protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
        
        **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-pull-request-review-protection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdatePullRequestReviewProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProtectedBranchPullRequestReview])
                res.protected_branch_pull_request_review = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_update_release(self, request: operations.ReposUpdateReleaseRequest) -> operations.ReposUpdateReleaseResponse:
        r"""Update a release
        Users with push access to the repository can edit a release.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-a-release - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/{release_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Release])
                res.release = out

        return res

    
    def repos_update_release_asset(self, request: operations.ReposUpdateReleaseAssetRequest) -> operations.ReposUpdateReleaseAssetResponse:
        r"""Update a release asset
        Users with push access to the repository can edit a release asset.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-a-release-asset - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/assets/{asset_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateReleaseAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseAsset])
                res.release_asset = out

        return res

    
    def repos_update_status_check_protection(self, request: operations.ReposUpdateStatusCheckProtectionRequest) -> operations.ReposUpdateStatusCheckProtectionResponse:
        r"""Update status check protection
        Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-status-check-potection - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateStatusCheckProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatusCheckPolicy])
                res.status_check_policy = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_update_webhook(self, request: operations.ReposUpdateWebhookRequest) -> operations.ReposUpdateWebhookResponse:
        r"""Update a repository webhook
        Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use \"[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository).\"
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#update-a-repository-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/hooks/{hook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def repos_upload_release_asset(self, request: operations.ReposUploadReleaseAssetRequest) -> operations.ReposUploadReleaseAssetResponse:
        r"""Upload a release asset
        This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
        the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-release) to upload a release asset.
        
        You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
        
        Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 
        
        `application/zip`
        
        GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
        you'll still need to pass your authentication to be able to upload an asset.
        
        When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
        
        **Notes:**
        *   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The \"[List assets for a release](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#list-assets-for-a-release)\"
        endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact).
        *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
        https://docs.github.com/enterprise-server@2.18/rest/reference/repos#upload-a-release-asset - API method documentation
        """
        
        base_url = operations.REPOS_UPLOAD_RELEASE_ASSET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/releases/{release_id}/assets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReposUploadReleaseAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseAsset])
                res.release_asset = out

        return res

    