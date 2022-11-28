import requests
from typing import Optional
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

    
    def teams_create(self, request: operations.TeamsCreateRequest) -> operations.TeamsCreateResponse:
        r"""Create Team
        Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Team])
                res.team = out

        return res

    
    def teams_create_membership(self, request: operations.TeamsCreateMembershipRequest) -> operations.TeamsCreateMembershipResponse:
        r"""Create Team Membership
        Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.
        
        Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.
        
        Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsCreateMembershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Membership])
                res.membership = out

        return res

    
    def teams_delete(self, request: operations.TeamsDeleteRequest) -> operations.TeamsDeleteResponse:
        r"""Delete Team
        Delete a team by its unique ID. Only team owners have write access for this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_delete_membership(self, request: operations.TeamsDeleteMembershipRequest) -> operations.TeamsDeleteMembershipResponse:
        r"""Delete Team Membership
        This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships/{membershipId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsDeleteMembershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def teams_get(self, request: operations.TeamsGetRequest) -> operations.TeamsGetResponse:
        r"""Get Team
        Get a team by its unique ID. All team members have read access for this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Team])
                res.team = out

        return res

    
    def teams_get_memberships(self, request: operations.TeamsGetMembershipsRequest) -> operations.TeamsGetMembershipsResponse:
        r"""Get Team Memberships
        Get a team members by the team unique ID. All team members have read access for this list of resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsGetMembershipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MembershipList])
                res.membership_list = out

        return res

    
    def teams_list(self, request: operations.TeamsListRequest) -> operations.TeamsListResponse:
        r"""List Teams
        Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamList])
                res.team_list = out

        return res

    
    def teams_update(self, request: operations.TeamsUpdateRequest) -> operations.TeamsUpdateResponse:
        r"""Update Team
        Update a team by its unique ID. Only team owners have write access for this resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Team])
                res.team = out

        return res

    
    def teams_update_membership_roles(self, request: operations.TeamsUpdateMembershipRolesRequest) -> operations.TeamsUpdateMembershipRolesResponse:
        r"""Update Membership Roles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships/{membershipId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateMembershipRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Membership])
                res.membership = out

        return res

    
    def teams_update_membership_status(self, request: operations.TeamsUpdateMembershipStatusRequest) -> operations.TeamsUpdateMembershipStatusResponse:
        r"""Update Team Membership Status
        Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{teamId}/memberships/{membershipId}/status", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TeamsUpdateMembershipStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Membership])
                res.membership = out

        return res

    