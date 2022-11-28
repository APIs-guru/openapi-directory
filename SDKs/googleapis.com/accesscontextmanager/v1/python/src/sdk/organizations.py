import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Organizations:
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

    
    def accesscontextmanager_organizations_gcp_user_access_bindings_create(self, request: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest) -> operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse:
        r"""Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/gcpUserAccessBindings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_organizations_gcp_user_access_bindings_delete(self, request: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest) -> operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse:
        r"""Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_organizations_gcp_user_access_bindings_get(self, request: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest) -> operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse:
        r"""Gets the GcpUserAccessBinding with the given name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GcpUserAccessBinding])
                res.gcp_user_access_binding = out

        return res

    
    def accesscontextmanager_organizations_gcp_user_access_bindings_list(self, request: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest) -> operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse:
        r"""Lists all GcpUserAccessBindings for a Google Cloud organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/gcpUserAccessBindings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGcpUserAccessBindingsResponse])
                res.list_gcp_user_access_bindings_response = out

        return res

    
    def accesscontextmanager_organizations_gcp_user_access_bindings_patch(self, request: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest) -> operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse:
        r"""Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
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

        res = operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    