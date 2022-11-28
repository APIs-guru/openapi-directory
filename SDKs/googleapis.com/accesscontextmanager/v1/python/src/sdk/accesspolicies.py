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
        r"""Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/accessLevels", request.path_params)
        
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
        r"""Lists all access levels for an access policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/accessLevels", request.path_params)
        
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

    
    def accesscontextmanager_access_policies_access_levels_replace_all(self, request: operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllRequest) -> operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse:
        r"""Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/accessLevels:replaceAll", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_create(self, request: operations.AccesscontextmanagerAccessPoliciesCreateRequest) -> operations.AccesscontextmanagerAccessPoliciesCreateResponse:
        r"""Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accessPolicies"
        
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

    
    def accesscontextmanager_access_policies_get_iam_policy(self, request: operations.AccesscontextmanagerAccessPoliciesGetIamPolicyRequest) -> operations.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse:
        r"""Gets the IAM policy for the specified Access Context Manager access policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def accesscontextmanager_access_policies_list(self, request: operations.AccesscontextmanagerAccessPoliciesListRequest) -> operations.AccesscontextmanagerAccessPoliciesListResponse:
        r"""Lists all access policies in an organization.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accessPolicies"
        
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

    
    def accesscontextmanager_access_policies_service_perimeters_commit(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse:
        r"""Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/servicePerimeters:commit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_service_perimeters_create(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse:
        r"""Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/servicePerimeters", request.path_params)
        
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

    
    def accesscontextmanager_access_policies_service_perimeters_list(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersListRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersListResponse:
        r"""Lists all service perimeters for an access policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/servicePerimeters", request.path_params)
        
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

    
    def accesscontextmanager_access_policies_service_perimeters_replace_all(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse:
        r"""Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/servicePerimeters:replaceAll", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def accesscontextmanager_access_policies_service_perimeters_test_iam_permissions(self, request: operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsRequest) -> operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse:
        r"""Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def accesscontextmanager_access_policies_set_iam_policy(self, request: operations.AccesscontextmanagerAccessPoliciesSetIamPolicyRequest) -> operations.AccesscontextmanagerAccessPoliciesSetIamPolicyResponse:
        r"""Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccesscontextmanagerAccessPoliciesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    