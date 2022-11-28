import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AccessPolicies:
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

    
    def accesscontextmanager_access_policies_access_levels_create(self, request: operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest) -> operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse:
        r"""Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/accessLevels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_access_levels_list(self, request: operations.AccesscontextmanagerAccessPoliciesAccessLevelsListRequest) -> operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse:
        r"""List all Access Levels for an access policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/accessLevels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesAccessLevelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccessLevelsResponse])
                res.list_access_levels_response = out

        return res

    
    def accesscontextmanager_access_policies_create(self, request: operations.AccesscontextmanagerAccessPoliciesCreateRequest) -> operations.AccesscontextmanagerAccessPoliciesCreateResponse:
        r"""Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta/accessPolicies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_list(self, request: operations.AccesscontextmanagerAccessPoliciesListRequest) -> operations.AccesscontextmanagerAccessPoliciesListResponse:
        r"""List all AccessPolicies under a container.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta/accessPolicies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccessPoliciesResponse])
                res.list_access_policies_response = out

        return res

    
    def accesscontextmanager_access_policies_service_perimeters_create(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse:
        r"""Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/servicePerimeters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_service_perimeters_delete(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse:
        r"""Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_service_perimeters_list(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse:
        r"""List all Service Perimeters for an access policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/servicePerimeters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicePerimetersResponse])
                res.list_service_perimeters_response = out

        return res

    
    def accesscontextmanager_access_policies_service_perimeters_patch(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse:
        r"""Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    