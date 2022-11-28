import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Orgs:
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

    
    def orgs_check_membership_for_user(self, request: operations.OrgsCheckMembershipForUserRequest) -> operations.OrgsCheckMembershipForUserResponse:
        r"""Check organization membership for a user
        Check if a user is, publicly or privately, a member of the organization.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#check-organization-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsCheckMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 302:
            res.headers = r.headers
            
        elif r.status_code == 404:
            pass

        return res

    
    def orgs_check_public_membership_for_user(self, request: operations.OrgsCheckPublicMembershipForUserRequest) -> operations.OrgsCheckPublicMembershipForUserResponse:
        r"""Check public organization membership for a user
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#check-public-organization-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/public_members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsCheckPublicMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def orgs_convert_member_to_outside_collaborator(self, request: operations.OrgsConvertMemberToOutsideCollaboratorRequest) -> operations.OrgsConvertMemberToOutsideCollaboratorResponse:
        r"""Convert an organization member to outside collaborator
        When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see \"[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)\".
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/outside_collaborators/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsConvertMemberToOutsideCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.orgs_convert_member_to_outside_collaborator_202_application_json_object = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_create_webhook(self, request: operations.OrgsCreateWebhookRequest) -> operations.OrgsCreateWebhookResponse:
        r"""Create an organization webhook
        Here's how you can create a hook that posts payloads in JSON format:
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#create-an-organization-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/hooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsCreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgHook])
                res.org_hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def orgs_delete_webhook(self, request: operations.OrgsDeleteWebhookRequest) -> operations.OrgsDeleteWebhookResponse:
        r"""Delete an organization webhook
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#delete-an-organization-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/hooks/{hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsDeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_get(self, request: operations.OrgsGetRequest) -> operations.OrgsGetResponse:
        r"""Get an organization
        To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
        
        GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See \"[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/)\" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below.\"
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrganizationFull])
                res.organization_full = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_get_membership_for_authenticated_user(self, request: operations.OrgsGetMembershipForAuthenticatedUserRequest) -> operations.OrgsGetMembershipForAuthenticatedUserResponse:
        r"""Get an organization membership for the authenticated user
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/memberships/orgs/{org}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsGetMembershipForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgMembership])
                res.org_membership = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_get_membership_for_user(self, request: operations.OrgsGetMembershipForUserRequest) -> operations.OrgsGetMembershipForUserResponse:
        r"""Get organization membership for a user
        In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-organization-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsGetMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgMembership])
                res.org_membership = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_get_webhook(self, request: operations.OrgsGetWebhookRequest) -> operations.OrgsGetWebhookResponse:
        r"""Get an organization webhook
        Returns a webhook configured in an organization. To get only the webhook `config` properties, see \"[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization).\"
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-an-organization-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/hooks/{hook_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsGetWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgHook])
                res.org_hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_list(self, request: operations.OrgsListRequest) -> operations.OrgsListResponse:
        r"""List organizations
        Lists all organizations, in the order that they were created on GitHub Enterprise Server.
        
        **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrganizationSimple]])
                res.organization_simples = out
        elif r.status_code == 304:
            pass

        return res

    
    def orgs_list_app_installations(self, request: operations.OrgsListAppInstallationsRequest) -> operations.OrgsListAppInstallationsResponse:
        r"""List app installations for an organization
        Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-app-installations-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/installations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListAppInstallationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OrgsListAppInstallations200ApplicationJSON])
                res.orgs_list_app_installations_200_application_json_object = out

        return res

    
    def orgs_list_for_authenticated_user(self, request: operations.OrgsListForAuthenticatedUserRequest) -> operations.OrgsListForAuthenticatedUserResponse:
        r"""List organizations for the authenticated user
        List organizations for the authenticated user.
        
        **OAuth scope requirements**
        
        This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/orgs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrganizationSimple]])
                res.organization_simples = out
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

        return res

    
    def orgs_list_for_user(self, request: operations.OrgsListForUserRequest) -> operations.OrgsListForUserResponse:
        r"""List organizations for a user
        List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
        
        This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organizations-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/orgs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrganizationSimple]])
                res.organization_simples = out

        return res

    
    def orgs_list_members(self, request: operations.OrgsListMembersRequest) -> operations.OrgsListMembersResponse:
        r"""List organization members
        List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organization-members - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 302:
            res.headers = r.headers
            
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def orgs_list_memberships_for_authenticated_user(self, request: operations.OrgsListMembershipsForAuthenticatedUserRequest) -> operations.OrgsListMembershipsForAuthenticatedUserResponse:
        r"""List organization memberships for the authenticated user
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/memberships/orgs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListMembershipsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrgMembership]])
                res.org_memberships = out
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

    
    def orgs_list_outside_collaborators(self, request: operations.OrgsListOutsideCollaboratorsRequest) -> operations.OrgsListOutsideCollaboratorsResponse:
        r"""List outside collaborators for an organization
        List all users who are outside collaborators of an organization.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-outside-collaborators-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/outside_collaborators", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListOutsideCollaboratorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def orgs_list_public_members(self, request: operations.OrgsListPublicMembersRequest) -> operations.OrgsListPublicMembersResponse:
        r"""List public organization members
        Members of an organization can choose to have their membership publicized or not.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-public-organization-members - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/public_members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListPublicMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def orgs_list_webhooks(self, request: operations.OrgsListWebhooksRequest) -> operations.OrgsListWebhooksResponse:
        r"""List organization webhooks
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#list-organization-webhooks - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/hooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsListWebhooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrgHook]])
                res.org_hooks = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_ping_webhook(self, request: operations.OrgsPingWebhookRequest) -> operations.OrgsPingWebhookResponse:
        r"""Ping an organization webhook
        This will trigger a [ping event](https://docs.github.com/enterprise-server@2.22/webhooks/#ping-event) to be sent to the hook.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#ping-an-organization-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/hooks/{hook_id}/pings", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsPingWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_remove_member(self, request: operations.OrgsRemoveMemberRequest) -> operations.OrgsRemoveMemberResponse:
        r"""Remove an organization member
        Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-an-organization-member - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsRemoveMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_remove_membership_for_user(self, request: operations.OrgsRemoveMembershipForUserRequest) -> operations.OrgsRemoveMembershipForUserResponse:
        r"""Remove organization membership for a user
        In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
        
        If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-organization-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/memberships/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsRemoveMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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

    
    def orgs_remove_outside_collaborator(self, request: operations.OrgsRemoveOutsideCollaboratorRequest) -> operations.OrgsRemoveOutsideCollaboratorResponse:
        r"""Remove outside collaborator from an organization
        Removing a user from this list will remove them from all the organization's repositories.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-outside-collaborator-from-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/outside_collaborators/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsRemoveOutsideCollaboratorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OrgsRemoveOutsideCollaborator422ApplicationJSON])
                res.orgs_remove_outside_collaborator_422_application_json_object = out

        return res

    
    def orgs_remove_public_membership_for_authenticated_user(self, request: operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest) -> operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse:
        r"""Remove public organization membership for the authenticated user
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/public_members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def orgs_set_membership_for_user(self, request: operations.OrgsSetMembershipForUserRequest) -> operations.OrgsSetMembershipForUserResponse:
        r"""Set organization membership for a user
        Only authenticated organization owners can add a member to the organization or update the member's role.
        
        *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
            
        *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
        
        **Rate limits**
        
        To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#set-organization-membership-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/memberships/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsSetMembershipForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgMembership])
                res.org_membership = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def orgs_set_public_membership_for_authenticated_user(self, request: operations.OrgsSetPublicMembershipForAuthenticatedUserRequest) -> operations.OrgsSetPublicMembershipForAuthenticatedUserResponse:
        r"""Set public organization membership for the authenticated user
        The user can publicize their own membership. (A user cannot publicize the membership for another user.)
        
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/public_members/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsSetPublicMembershipForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def orgs_update(self, request: operations.OrgsUpdateRequest) -> operations.OrgsUpdateResponse:
        r"""Update an organization
        **Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
        
        Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs/#update-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrganizationFull])
                res.organization_full = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OrgsUpdate415ApplicationJSON])
                res.orgs_update_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.orgs_update_422_application_json_one_of = out

        return res

    
    def orgs_update_membership_for_authenticated_user(self, request: operations.OrgsUpdateMembershipForAuthenticatedUserRequest) -> operations.OrgsUpdateMembershipForAuthenticatedUserResponse:
        r"""Update an organization membership for the authenticated user
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/memberships/orgs/{org}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsUpdateMembershipForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgMembership])
                res.org_membership = out
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

    
    def orgs_update_webhook(self, request: operations.OrgsUpdateWebhookRequest) -> operations.OrgsUpdateWebhookResponse:
        r"""Update an organization webhook
        Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use \"[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization).\"
        https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#update-an-organization-webhook - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/hooks/{hook_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgsUpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrgHook])
                res.org_hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    