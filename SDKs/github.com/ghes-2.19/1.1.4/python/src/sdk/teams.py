import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Teams:
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

    
    def teams_add_member_legacy(self, request: operations.TeamsAddMemberLegacyRequest) -> operations.TeamsAddMemberLegacyResponse:
        r"""Add team member (Legacy)
        The \"Add team member\" endpoint (described below) is deprecated.
        
        We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
        
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-team-member-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddMemberLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def teams_add_or_update_membership_for_user(self, request: operations.TeamsAddOrUpdateMembershipForUserRequest) -> operations.TeamsAddOrUpdateMembershipForUserResponse:
        r"""Add or update team membership for a user
        If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
        
        If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the \"pending\" state until the user accepts the invitation, at which point the membership will transition to the \"active\" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
        
        If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/memberships/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMembership])
                res.team_membership = out
        elif r.status_code == 422:
            pass

        return res

    
    def teams_add_or_update_project_permissions(self, request: operations.TeamsAddOrUpdateProjectPermissionsRequest) -> operations.TeamsAddOrUpdateProjectPermissionsResponse:
        r"""Add or update team project permissions
        Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#add-or-update-team-project-permissions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects/{project_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateProjectPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsAddOrUpdateProjectPermissions403ApplicationJSON])
                res.teams_add_or_update_project_permissions_403_application_json_object = out

        return res

    
    def teams_add_or_update_repo_permissions(self, request: operations.TeamsAddOrUpdateRepoPermissionsRequest) -> operations.TeamsAddOrUpdateRepoPermissionsResponse:
        r"""Add or update team repository permissions
        To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
        
        Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos/{owner}/{repo}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateRepoPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_check_permissions_for_project(self, request: operations.TeamsCheckPermissionsForProjectRequest) -> operations.TeamsCheckPermissionsForProjectResponse:
        r"""Check team permissions for a project
        Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#check-team-permissions-for-a-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects/{project_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCheckPermissionsForProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamProject])
                res.team_project = out
        elif r.status_code == 404:
            pass

        return res

    
    def teams_check_permissions_for_repo(self, request: operations.TeamsCheckPermissionsForRepoRequest) -> operations.TeamsCheckPermissionsForRepoResponse:
        r"""Check team permissions for a repository
        **Note**: If you pass the `hellcat-preview` media type, repositories inherited through a parent team will be checked.
        
        You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types/) via the `Accept` header:
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCheckPermissionsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MinimalRepository])
                res.minimal_repository = out
            if utils.match_content_type(content_type, "application/vnd.github.v3.repository+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FullRepository])
                res.full_repository = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def teams_create(self, request: operations.TeamsCreateRequest) -> operations.TeamsCreateResponse:
        r"""Create a team
        To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see \"[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization).\"
        
        When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see \"[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)\".
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def teams_create_discussion(self, request: operations.TeamsCreateDiscussionRequest) -> operations.TeamsCreateDiscussionResponse:
        r"""Create a discussion
        Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateDiscussionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_create_discussion_comment(self, request: operations.TeamsCreateDiscussionCommentRequest) -> operations.TeamsCreateDiscussionCommentResponse:
        r"""Create a discussion comment
        Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateDiscussionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_delete(self, request: operations.TeamsDeleteRequest) -> operations.TeamsDeleteResponse:
        r"""Delete a team
        To delete a team, the authenticated user must be an organization owner or team maintainer.
        
        If you are an organization owner and you pass the `hellcat-preview` media type, deleting a parent team will delete all of its child teams as well.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#delete-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_discussion(self, request: operations.TeamsDeleteDiscussionRequest) -> operations.TeamsDeleteDiscussionResponse:
        r"""Delete a discussion
        Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#delete-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteDiscussionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_discussion_comment(self, request: operations.TeamsDeleteDiscussionCommentRequest) -> operations.TeamsDeleteDiscussionCommentResponse:
        r"""Delete a discussion comment
        Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#delete-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteDiscussionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_get(self, request: operations.TeamsGetRequest) -> operations.TeamsGetResponse:
        r"""Get a team
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#get-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out

        return res

    
    def teams_get_by_name(self, request: operations.TeamsGetByNameRequest) -> operations.TeamsGetByNameResponse:
        r"""Get a team by name
        Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-team-by-name - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def teams_get_discussion(self, request: operations.TeamsGetDiscussionRequest) -> operations.TeamsGetDiscussionResponse:
        r"""Get a discussion
        Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetDiscussionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_get_discussion_comment(self, request: operations.TeamsGetDiscussionCommentRequest) -> operations.TeamsGetDiscussionCommentResponse:
        r"""Get a discussion comment
        Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetDiscussionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_get_member_legacy(self, request: operations.TeamsGetMemberLegacyRequest) -> operations.TeamsGetMemberLegacyResponse:
        r"""Get team member (Legacy)
        The \"Get team member\" endpoint (described below) is deprecated.
        
        We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
        
        To list members in a team, the team must be visible to the authenticated user.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-member-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetMemberLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def teams_get_membership_for_user(self, request: operations.TeamsGetMembershipForUserRequest) -> operations.TeamsGetMembershipForUserResponse:
        r"""Get team membership for a user
        If you pass the `hellcat-preview` media type, team members will include the members of child teams.
        
        To get a user's membership with a team, the team must be visible to the authenticated user.
        
        **Note:**
        The response contains the `state` of the membership and the member's `role`.
        
        The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-team).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMembership])
                res.team_membership = out

        return res

    
    def teams_list(self, request: operations.TeamsListRequest) -> operations.TeamsListResponse:
        r"""List teams
        Lists all teams in an organization that are visible to the authenticated user.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-teams - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def teams_list_child(self, request: operations.TeamsListChildRequest) -> operations.TeamsListChildResponse:
        r"""List child teams
        You must use the `hellcat-preview` media type to use this endpoint.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-child-teams - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/teams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListChildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team2]])
                res.team_2s = out

        return res

    
    def teams_list_discussion_comments(self, request: operations.TeamsListDiscussionCommentsRequest) -> operations.TeamsListDiscussionCommentsResponse:
        r"""List discussion comments
        List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-discussion-comments - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListDiscussionCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamDiscussionComment]])
                res.team_discussion_comments = out

        return res

    
    def teams_list_discussions(self, request: operations.TeamsListDiscussionsRequest) -> operations.TeamsListDiscussionsResponse:
        r"""List discussions
        List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-discussions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListDiscussionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamDiscussion]])
                res.team_discussions = out

        return res

    
    def teams_list_for_authenticated_user(self, request: operations.TeamsListForAuthenticatedUserRequest) -> operations.TeamsListForAuthenticatedUserResponse:
        r"""List teams for the authenticated user
        List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamFull]])
                res.team_fulls = out
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

        return res

    
    def teams_list_members(self, request: operations.TeamsListMembersRequest) -> operations.TeamsListMembersResponse:
        r"""List team members
        If you pass the `hellcat-preview` media type, team members will include the members of child teams.
        
        To list members in a team, the team must be visible to the authenticated user.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-team-members - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def teams_list_projects(self, request: operations.TeamsListProjectsRequest) -> operations.TeamsListProjectsResponse:
        r"""List team projects
        Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-team-projects - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamProject]])
                res.team_projects = out

        return res

    
    def teams_list_repos(self, request: operations.TeamsListReposRequest) -> operations.TeamsListReposResponse:
        r"""List team repositories
        **Note**: If you pass the `hellcat-preview` media type, the response will include any repositories inherited through a parent team.
        
        If you are an [authenticated](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-team-repositories - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListReposResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out

        return res

    
    def teams_remove_member_legacy(self, request: operations.TeamsRemoveMemberLegacyRequest) -> operations.TeamsRemoveMemberLegacyResponse:
        r"""Remove team member (Legacy)
        The \"Remove team member\" endpoint (described below) is deprecated.
        
        We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
        
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-member-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveMemberLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def teams_remove_membership_for_user(self, request: operations.TeamsRemoveMembershipForUserRequest) -> operations.TeamsRemoveMembershipForUserResponse:
        r"""Remove team membership for a user
        To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_remove_project(self, request: operations.TeamsRemoveProjectRequest) -> operations.TeamsRemoveProjectResponse:
        r"""Remove a project from a team
        Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#remove-a-project-from-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_remove_repo(self, request: operations.TeamsRemoveRepoRequest) -> operations.TeamsRemoveRepoResponse:
        r"""Remove a repository from a team
        If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_update(self, request: operations.TeamsUpdateRequest) -> operations.TeamsUpdateResponse:
        r"""Update a team
        To edit a team, the authenticated user must either be an organization owner or a team maintainer.
        
        **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#update-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out

        return res

    
    def teams_update_discussion(self, request: operations.TeamsUpdateDiscussionRequest) -> operations.TeamsUpdateDiscussionResponse:
        r"""Update a discussion
        Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#update-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateDiscussionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_update_discussion_comment(self, request: operations.TeamsUpdateDiscussionCommentRequest) -> operations.TeamsUpdateDiscussionCommentResponse:
        r"""Update a discussion comment
        Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.19/rest/reference/teams#update-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateDiscussionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    