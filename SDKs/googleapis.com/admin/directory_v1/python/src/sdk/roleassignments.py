import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RoleAssignments:
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

    
    def directory_role_assignments_delete(self, request: operations.DirectoryRoleAssignmentsDeleteRequest) -> operations.DirectoryRoleAssignmentsDeleteResponse:
        r"""Deletes a role assignment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryRoleAssignmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_role_assignments_get(self, request: operations.DirectoryRoleAssignmentsGetRequest) -> operations.DirectoryRoleAssignmentsGetResponse:
        r"""Retrieves a role assignment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryRoleAssignmentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleAssignment])
                res.role_assignment = out

        return res

    
    def directory_role_assignments_insert(self, request: operations.DirectoryRoleAssignmentsInsertRequest) -> operations.DirectoryRoleAssignmentsInsertResponse:
        r"""Creates a role assignment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/roleassignments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryRoleAssignmentsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleAssignment])
                res.role_assignment = out

        return res

    
    def directory_role_assignments_list(self, request: operations.DirectoryRoleAssignmentsListRequest) -> operations.DirectoryRoleAssignmentsListResponse:
        r"""Retrieves a paginated list of all roleAssignments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customer}/roleassignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryRoleAssignmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoleAssignments])
                res.role_assignments = out

        return res

    