import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def accessapproval_projects_approval_requests_approve(self, request: operations.AccessapprovalProjectsApprovalRequestsApproveRequest) -> operations.AccessapprovalProjectsApprovalRequestsApproveResponse:
        r"""Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:approve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsApprovalRequestsApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApprovalRequest])
                res.approval_request = out

        return res

    
    def accessapproval_projects_approval_requests_dismiss(self, request: operations.AccessapprovalProjectsApprovalRequestsDismissRequest) -> operations.AccessapprovalProjectsApprovalRequestsDismissResponse:
        r"""Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:dismiss", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsApprovalRequestsDismissResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApprovalRequest])
                res.approval_request = out

        return res

    
    def accessapproval_projects_approval_requests_get(self, request: operations.AccessapprovalProjectsApprovalRequestsGetRequest) -> operations.AccessapprovalProjectsApprovalRequestsGetResponse:
        r"""Gets an approval request. Returns NOT_FOUND if the request does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsApprovalRequestsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApprovalRequest])
                res.approval_request = out

        return res

    
    def accessapproval_projects_approval_requests_invalidate(self, request: operations.AccessapprovalProjectsApprovalRequestsInvalidateRequest) -> operations.AccessapprovalProjectsApprovalRequestsInvalidateResponse:
        r"""Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:invalidate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsApprovalRequestsInvalidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApprovalRequest])
                res.approval_request = out

        return res

    
    def accessapproval_projects_approval_requests_list(self, request: operations.AccessapprovalProjectsApprovalRequestsListRequest) -> operations.AccessapprovalProjectsApprovalRequestsListResponse:
        r"""Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/approvalRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsApprovalRequestsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListApprovalRequestsResponse])
                res.list_approval_requests_response = out

        return res

    
    def accessapproval_projects_delete_access_approval_settings(self, request: operations.AccessapprovalProjectsDeleteAccessApprovalSettingsRequest) -> operations.AccessapprovalProjectsDeleteAccessApprovalSettingsResponse:
        r"""Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsDeleteAccessApprovalSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def accessapproval_projects_update_access_approval_settings(self, request: operations.AccessapprovalProjectsUpdateAccessApprovalSettingsRequest) -> operations.AccessapprovalProjectsUpdateAccessApprovalSettingsResponse:
        r"""Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessapprovalProjectsUpdateAccessApprovalSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccessApprovalSettings])
                res.access_approval_settings = out

        return res

    