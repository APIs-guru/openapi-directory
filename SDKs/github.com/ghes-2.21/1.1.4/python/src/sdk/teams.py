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
        
        We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
        
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-team-member-legacy - API method documentation
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

    
    def teams_add_or_update_membership_for_user_in_org(self, request: operations.TeamsAddOrUpdateMembershipForUserInOrgRequest) -> operations.TeamsAddOrUpdateMembershipForUserInOrgResponse:
        r"""Add or update team membership for a user
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        
        An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the \"pending\" state until the person accepts the invitation, at which point the membership will transition to the \"active\" state and the user will be added as a member of the team.
        
        If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/memberships/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateMembershipForUserInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMembership])
                res.team_membership = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def teams_add_or_update_membership_for_user_legacy(self, request: operations.TeamsAddOrUpdateMembershipForUserLegacyRequest) -> operations.TeamsAddOrUpdateMembershipForUserLegacyResponse:
        r"""Add or update team membership for a user (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
        
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        
        If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the \"pending\" state until the user accepts the invitation, at which point the membership will transition to the \"active\" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
        
        If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy - API method documentation
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

        res = operations.TeamsAddOrUpdateMembershipForUserLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMembership])
                res.team_membership = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            pass

        return res

    
    def teams_add_or_update_project_permissions_in_org(self, request: operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest) -> operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse:
        r"""Add or update team project permissions
        Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-project-permissions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSON])
                res.teams_add_or_update_project_permissions_in_org_403_application_json_object = out

        return res

    
    def teams_add_or_update_project_permissions_legacy(self, request: operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest) -> operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse:
        r"""Add or update team project permissions (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
        
        Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-project-permissions-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects/{project_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON])
                res.teams_add_or_update_project_permissions_legacy_403_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSON])
                res.teams_add_or_update_project_permissions_legacy_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def teams_add_or_update_repo_permissions_in_org(self, request: operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest) -> operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse:
        r"""Add or update team repository permissions
        To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs).\"
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
        
        For more information about the permission levels, see \"[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)\".
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_add_or_update_repo_permissions_legacy(self, request: operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest) -> operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse:
        r"""Add or update team repository permissions (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new \"[Add or update team repository permissions](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-repository-permissions)\" endpoint.
        
        To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
        
        Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-repository-permissions-legacy - API method documentation
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

        res = operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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

    
    def teams_check_permissions_for_project_in_org(self, request: operations.TeamsCheckPermissionsForProjectInOrgRequest) -> operations.TeamsCheckPermissionsForProjectInOrgResponse:
        r"""Check team permissions for a project
        Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#check-team-permissions-for-a-project - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCheckPermissionsForProjectInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamProject])
                res.team_project = out
        elif r.status_code == 404:
            pass

        return res

    
    def teams_check_permissions_for_project_legacy(self, request: operations.TeamsCheckPermissionsForProjectLegacyRequest) -> operations.TeamsCheckPermissionsForProjectLegacyResponse:
        r"""Check team permissions for a project (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
        
        Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-project-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCheckPermissionsForProjectLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamProject])
                res.team_project = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsCheckPermissionsForProjectLegacy415ApplicationJSON])
                res.teams_check_permissions_for_project_legacy_415_application_json_object = out

        return res

    
    def teams_check_permissions_for_repo_in_org(self, request: operations.TeamsCheckPermissionsForRepoInOrgRequest) -> operations.TeamsCheckPermissionsForRepoInOrgResponse:
        r"""Check team permissions for a repository
        Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
        
        You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
        
        If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCheckPermissionsForRepoInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamRepository])
                res.team_repository = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def teams_check_permissions_for_repo_legacy(self, request: operations.TeamsCheckPermissionsForRepoLegacyRequest) -> operations.TeamsCheckPermissionsForRepoLegacyResponse:
        r"""Check team permissions for a repository (Legacy)
        **Note**: Repositories inherited through a parent team will also be checked.
        
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
        
        You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-repository-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCheckPermissionsForRepoLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamRepository])
                res.team_repository = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def teams_create(self, request: operations.TeamsCreateRequest) -> operations.TeamsCreateResponse:
        r"""Create a team
        To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see \"[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization).\"
        
        When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see \"[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)\".
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team - API method documentation
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

    
    def teams_create_discussion_comment_in_org(self, request: operations.TeamsCreateDiscussionCommentInOrgRequest) -> operations.TeamsCreateDiscussionCommentInOrgResponse:
        r"""Create a discussion comment
        Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateDiscussionCommentInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_create_discussion_comment_legacy(self, request: operations.TeamsCreateDiscussionCommentLegacyRequest) -> operations.TeamsCreateDiscussionCommentLegacyResponse:
        r"""Create a discussion comment (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment) endpoint.
        
        Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment-legacy - API method documentation
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

        res = operations.TeamsCreateDiscussionCommentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_create_discussion_in_org(self, request: operations.TeamsCreateDiscussionInOrgRequest) -> operations.TeamsCreateDiscussionInOrgResponse:
        r"""Create a discussion
        Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateDiscussionInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_create_discussion_legacy(self, request: operations.TeamsCreateDiscussionLegacyRequest) -> operations.TeamsCreateDiscussionLegacyResponse:
        r"""Create a discussion (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion) endpoint.
        
        Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-legacy - API method documentation
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

        res = operations.TeamsCreateDiscussionLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_delete_discussion_comment_in_org(self, request: operations.TeamsDeleteDiscussionCommentInOrgRequest) -> operations.TeamsDeleteDiscussionCommentInOrgResponse:
        r"""Delete a discussion comment
        Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteDiscussionCommentInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_discussion_comment_legacy(self, request: operations.TeamsDeleteDiscussionCommentLegacyRequest) -> operations.TeamsDeleteDiscussionCommentLegacyResponse:
        r"""Delete a discussion comment (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment) endpoint.
        
        Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteDiscussionCommentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_discussion_in_org(self, request: operations.TeamsDeleteDiscussionInOrgRequest) -> operations.TeamsDeleteDiscussionInOrgResponse:
        r"""Delete a discussion
        Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteDiscussionInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_discussion_legacy(self, request: operations.TeamsDeleteDiscussionLegacyRequest) -> operations.TeamsDeleteDiscussionLegacyResponse:
        r"""Delete a discussion (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion) endpoint.
        
        Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteDiscussionLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_in_org(self, request: operations.TeamsDeleteInOrgRequest) -> operations.TeamsDeleteInOrgResponse:
        r"""Delete a team
        To delete a team, the authenticated user must be an organization owner or team maintainer.
        
        If you are an organization owner, deleting a parent team will delete all of its child teams as well.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_legacy(self, request: operations.TeamsDeleteLegacyRequest) -> operations.TeamsDeleteLegacyResponse:
        r"""Delete a team (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-team) endpoint.
        
        To delete a team, the authenticated user must be an organization owner or team maintainer.
        
        If you are an organization owner, deleting a parent team will delete all of its child teams as well.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#delete-a-team-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def teams_get_by_name(self, request: operations.TeamsGetByNameRequest) -> operations.TeamsGetByNameResponse:
        r"""Get a team by name
        Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-team-by-name - API method documentation
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

    
    def teams_get_discussion_comment_in_org(self, request: operations.TeamsGetDiscussionCommentInOrgRequest) -> operations.TeamsGetDiscussionCommentInOrgResponse:
        r"""Get a discussion comment
        Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetDiscussionCommentInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_get_discussion_comment_legacy(self, request: operations.TeamsGetDiscussionCommentLegacyRequest) -> operations.TeamsGetDiscussionCommentLegacyResponse:
        r"""Get a discussion comment (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment) endpoint.
        
        Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetDiscussionCommentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_get_discussion_in_org(self, request: operations.TeamsGetDiscussionInOrgRequest) -> operations.TeamsGetDiscussionInOrgResponse:
        r"""Get a discussion
        Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetDiscussionInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_get_discussion_legacy(self, request: operations.TeamsGetDiscussionLegacyRequest) -> operations.TeamsGetDiscussionLegacyResponse:
        r"""Get a discussion (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion) endpoint.
        
        Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetDiscussionLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_get_legacy(self, request: operations.TeamsGetLegacyRequest) -> operations.TeamsGetLegacyResponse:
        r"""Get a team (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-team-by-name) endpoint.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#get-a-team-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def teams_get_member_legacy(self, request: operations.TeamsGetMemberLegacyRequest) -> operations.TeamsGetMemberLegacyResponse:
        r"""Get team member (Legacy)
        The \"Get team member\" endpoint (described below) is deprecated.
        
        We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
        
        To list members in a team, the team must be visible to the authenticated user.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-member-legacy - API method documentation
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

    
    def teams_get_membership_for_user_in_org(self, request: operations.TeamsGetMembershipForUserInOrgRequest) -> operations.TeamsGetMembershipForUserInOrgResponse:
        r"""Get team membership for a user
        Team members will include the members of child teams.
        
        To get a user's membership with a team, the team must be visible to the authenticated user.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
        
        **Note:**
        The response contains the `state` of the membership and the member's `role`.
        
        The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetMembershipForUserInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMembership])
                res.team_membership = out
        elif r.status_code == 404:
            pass

        return res

    
    def teams_get_membership_for_user_legacy(self, request: operations.TeamsGetMembershipForUserLegacyRequest) -> operations.TeamsGetMembershipForUserLegacyResponse:
        r"""Get team membership for a user (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user) endpoint.
        
        Team members will include the members of child teams.
        
        To get a user's membership with a team, the team must be visible to the authenticated user.
        
        **Note:**
        The response contains the `state` of the membership and the member's `role`.
        
        The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetMembershipForUserLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMembership])
                res.team_membership = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def teams_list(self, request: operations.TeamsListRequest) -> operations.TeamsListResponse:
        r"""List teams
        Lists all teams in an organization that are visible to the authenticated user.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-teams - API method documentation
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

    
    def teams_list_child_in_org(self, request: operations.TeamsListChildInOrgRequest) -> operations.TeamsListChildInOrgResponse:
        r"""List child teams
        Lists the child teams of the team specified by `{team_slug}`.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-child-teams - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/teams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListChildInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out

        return res

    
    def teams_list_child_legacy(self, request: operations.TeamsListChildLegacyRequest) -> operations.TeamsListChildLegacyResponse:
        r"""List child teams (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-child-teams) endpoint.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-child-teams-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/teams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListChildLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
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

    
    def teams_list_discussion_comments_in_org(self, request: operations.TeamsListDiscussionCommentsInOrgRequest) -> operations.TeamsListDiscussionCommentsInOrgResponse:
        r"""List discussion comments
        List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListDiscussionCommentsInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamDiscussionComment]])
                res.team_discussion_comments = out

        return res

    
    def teams_list_discussion_comments_legacy(self, request: operations.TeamsListDiscussionCommentsLegacyRequest) -> operations.TeamsListDiscussionCommentsLegacyResponse:
        r"""List discussion comments (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments) endpoint.
        
        List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListDiscussionCommentsLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamDiscussionComment]])
                res.team_discussion_comments = out

        return res

    
    def teams_list_discussions_in_org(self, request: operations.TeamsListDiscussionsInOrgRequest) -> operations.TeamsListDiscussionsInOrgResponse:
        r"""List discussions
        List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListDiscussionsInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamDiscussion]])
                res.team_discussions = out

        return res

    
    def teams_list_discussions_legacy(self, request: operations.TeamsListDiscussionsLegacyRequest) -> operations.TeamsListDiscussionsLegacyResponse:
        r"""List discussions (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions) endpoint.
        
        List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListDiscussionsLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamDiscussion]])
                res.team_discussions = out

        return res

    
    def teams_list_for_authenticated_user(self, request: operations.TeamsListForAuthenticatedUserRequest) -> operations.TeamsListForAuthenticatedUserResponse:
        r"""List teams for the authenticated user
        List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
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

    
    def teams_list_members_in_org(self, request: operations.TeamsListMembersInOrgRequest) -> operations.TeamsListMembersInOrgResponse:
        r"""List team members
        Team members will include the members of child teams.
        
        To list members in a team, the team must be visible to the authenticated user.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListMembersInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def teams_list_members_legacy(self, request: operations.TeamsListMembersLegacyRequest) -> operations.TeamsListMembersLegacyResponse:
        r"""List team members (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members) endpoint.
        
        Team members will include the members of child teams.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListMembersLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def teams_list_projects_in_org(self, request: operations.TeamsListProjectsInOrgRequest) -> operations.TeamsListProjectsInOrgResponse:
        r"""List team projects
        Lists the organization projects for a team.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-projects - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/projects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListProjectsInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamProject]])
                res.team_projects = out

        return res

    
    def teams_list_projects_legacy(self, request: operations.TeamsListProjectsLegacyRequest) -> operations.TeamsListProjectsLegacyResponse:
        r"""List team projects (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-projects) endpoint.
        
        Lists the organization projects for a team.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-team-projects-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListProjectsLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamProject]])
                res.team_projects = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsListProjectsLegacy415ApplicationJSON])
                res.teams_list_projects_legacy_415_application_json_object = out

        return res

    
    def teams_list_repos_in_org(self, request: operations.TeamsListReposInOrgRequest) -> operations.TeamsListReposInOrgResponse:
        r"""List team repositories
        Lists a team's repositories visible to the authenticated user.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-repositories - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/repos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListReposInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out

        return res

    
    def teams_list_repos_legacy(self, request: operations.TeamsListReposLegacyRequest) -> operations.TeamsListReposLegacyResponse:
        r"""List team repositories (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-repositories) endpoint.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-team-repositories-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListReposLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MinimalRepository]])
                res.minimal_repositories = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def teams_remove_member_legacy(self, request: operations.TeamsRemoveMemberLegacyRequest) -> operations.TeamsRemoveMemberLegacyResponse:
        r"""Remove team member (Legacy)
        The \"Remove team member\" endpoint (described below) is deprecated.
        
        We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
        
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-member-legacy - API method documentation
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

    
    def teams_remove_membership_for_user_in_org(self, request: operations.TeamsRemoveMembershipForUserInOrgRequest) -> operations.TeamsRemoveMembershipForUserInOrgResponse:
        r"""Remove team membership for a user
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveMembershipForUserInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def teams_remove_membership_for_user_legacy(self, request: operations.TeamsRemoveMembershipForUserLegacyRequest) -> operations.TeamsRemoveMembershipForUserLegacyResponse:
        r"""Remove team membership for a user (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
        
        Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
        
        **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see \"[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).\"
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveMembershipForUserLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def teams_remove_project_in_org(self, request: operations.TeamsRemoveProjectInOrgRequest) -> operations.TeamsRemoveProjectInOrgResponse:
        r"""Remove a project from a team
        Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-a-project-from-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveProjectInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_remove_project_legacy(self, request: operations.TeamsRemoveProjectLegacyRequest) -> operations.TeamsRemoveProjectLegacyResponse:
        r"""Remove a project from a team (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-a-project-from-a-team) endpoint.
        
        Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-project-from-a-team-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/projects/{project_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveProjectLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TeamsRemoveProjectLegacy415ApplicationJSON])
                res.teams_remove_project_legacy_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def teams_remove_repo_in_org(self, request: operations.TeamsRemoveRepoInOrgRequest) -> operations.TeamsRemoveRepoInOrgResponse:
        r"""Remove a repository from a team
        If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveRepoInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_remove_repo_legacy(self, request: operations.TeamsRemoveRepoLegacyRequest) -> operations.TeamsRemoveRepoLegacyResponse:
        r"""Remove a repository from a team (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
        
        If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-repository-from-a-team-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/repos/{owner}/{repo}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsRemoveRepoLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_update_discussion_comment_in_org(self, request: operations.TeamsUpdateDiscussionCommentInOrgRequest) -> operations.TeamsUpdateDiscussionCommentInOrgResponse:
        r"""Update a discussion comment
        Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateDiscussionCommentInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_update_discussion_comment_legacy(self, request: operations.TeamsUpdateDiscussionCommentLegacyRequest) -> operations.TeamsUpdateDiscussionCommentLegacyResponse:
        r"""Update a discussion comment (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment) endpoint.
        
        Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment-legacy - API method documentation
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

        res = operations.TeamsUpdateDiscussionCommentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussionComment])
                res.team_discussion_comment = out

        return res

    
    def teams_update_discussion_in_org(self, request: operations.TeamsUpdateDiscussionInOrgRequest) -> operations.TeamsUpdateDiscussionInOrgResponse:
        r"""Update a discussion
        Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateDiscussionInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_update_discussion_legacy(self, request: operations.TeamsUpdateDiscussionLegacyRequest) -> operations.TeamsUpdateDiscussionLegacyResponse:
        r"""Update a discussion (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion) endpoint.
        
        Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-legacy - API method documentation
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

        res = operations.TeamsUpdateDiscussionLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDiscussion])
                res.team_discussion = out

        return res

    
    def teams_update_in_org(self, request: operations.TeamsUpdateInOrgRequest) -> operations.TeamsUpdateInOrgResponse:
        r"""Update a team
        To edit a team, the authenticated user must either be an organization owner or a team maintainer.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-team - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out

        return res

    
    def teams_update_legacy(self, request: operations.TeamsUpdateLegacyRequest) -> operations.TeamsUpdateLegacyResponse:
        r"""Update a team (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-team) endpoint.
        
        To edit a team, the authenticated user must either be an organization owner or a team maintainer.
        
        **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
        https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#update-a-team-legacy - API method documentation
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

        res = operations.TeamsUpdateLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamFull])
                res.team_full = out
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

    