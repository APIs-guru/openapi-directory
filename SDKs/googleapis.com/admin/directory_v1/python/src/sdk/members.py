import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Members:
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

    
    def directory_members_delete(self, request: operations.DirectoryMembersDeleteRequest) -> operations.DirectoryMembersDeleteResponse:
        r"""Removes a member from a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/members/{memberKey}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_members_get(self, request: operations.DirectoryMembersGetRequest) -> operations.DirectoryMembersGetResponse:
        r"""Retrieves a group member's properties.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/members/{memberKey}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Member])
                res.member = out

        return res

    
    def directory_members_has_member(self, request: operations.DirectoryMembersHasMemberRequest) -> operations.DirectoryMembersHasMemberResponse:
        r"""Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersHasMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MembersHasMember])
                res.members_has_member = out

        return res

    
    def directory_members_insert(self, request: operations.DirectoryMembersInsertRequest) -> operations.DirectoryMembersInsertResponse:
        r"""Adds a user to the specified group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/members", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Member])
                res.member = out

        return res

    
    def directory_members_list(self, request: operations.DirectoryMembersListRequest) -> operations.DirectoryMembersListResponse:
        r"""Retrieves a paginated list of all members in a group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Members])
                res.members = out

        return res

    
    def directory_members_patch(self, request: operations.DirectoryMembersPatchRequest) -> operations.DirectoryMembersPatchResponse:
        r"""Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/members/{memberKey}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Member])
                res.member = out

        return res

    
    def directory_members_update(self, request: operations.DirectoryMembersUpdateRequest) -> operations.DirectoryMembersUpdateResponse:
        r"""Updates the membership of a user in the specified group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/groups/{groupKey}/members/{memberKey}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMembersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Member])
                res.member = out

        return res

    