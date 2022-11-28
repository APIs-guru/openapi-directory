import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Enterprises:
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

    
    def androidmanagement_enterprises_create(self, request: operations.AndroidmanagementEnterprisesCreateRequest) -> operations.AndroidmanagementEnterprisesCreateResponse:
        r"""Creates an enterprise. This is the last step in the enterprise signup flow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/enterprises"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Enterprise])
                res.enterprise = out

        return res

    
    def androidmanagement_enterprises_devices_issue_command(self, request: operations.AndroidmanagementEnterprisesDevicesIssueCommandRequest) -> operations.AndroidmanagementEnterprisesDevicesIssueCommandResponse:
        r"""Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:issueCommand", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesDevicesIssueCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androidmanagement_enterprises_devices_list(self, request: operations.AndroidmanagementEnterprisesDevicesListRequest) -> operations.AndroidmanagementEnterprisesDevicesListResponse:
        r"""Lists devices for a given enterprise. Deleted devices are not returned in the response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDevicesResponse])
                res.list_devices_response = out

        return res

    
    def androidmanagement_enterprises_devices_operations_cancel(self, request: operations.AndroidmanagementEnterprisesDevicesOperationsCancelRequest) -> operations.AndroidmanagementEnterprisesDevicesOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesDevicesOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androidmanagement_enterprises_enrollment_tokens_create(self, request: operations.AndroidmanagementEnterprisesEnrollmentTokensCreateRequest) -> operations.AndroidmanagementEnterprisesEnrollmentTokensCreateResponse:
        r"""Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/enrollmentTokens", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesEnrollmentTokensCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnrollmentToken])
                res.enrollment_token = out

        return res

    
    def androidmanagement_enterprises_enrollment_tokens_list(self, request: operations.AndroidmanagementEnterprisesEnrollmentTokensListRequest) -> operations.AndroidmanagementEnterprisesEnrollmentTokensListResponse:
        r"""Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/enrollmentTokens", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesEnrollmentTokensListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnrollmentTokensResponse])
                res.list_enrollment_tokens_response = out

        return res

    
    def androidmanagement_enterprises_list(self, request: operations.AndroidmanagementEnterprisesListRequest) -> operations.AndroidmanagementEnterprisesListResponse:
        r"""Lists EMM-managed enterprises. Only BASIC fields are returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/enterprises"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEnterprisesResponse])
                res.list_enterprises_response = out

        return res

    
    def androidmanagement_enterprises_policies_list(self, request: operations.AndroidmanagementEnterprisesPoliciesListRequest) -> operations.AndroidmanagementEnterprisesPoliciesListResponse:
        r"""Lists policies for a given enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/policies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPoliciesResponse])
                res.list_policies_response = out

        return res

    
    def androidmanagement_enterprises_web_apps_create(self, request: operations.AndroidmanagementEnterprisesWebAppsCreateRequest) -> operations.AndroidmanagementEnterprisesWebAppsCreateResponse:
        r"""Creates a web app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/webApps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesWebAppsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebApp])
                res.web_app = out

        return res

    
    def androidmanagement_enterprises_web_apps_delete(self, request: operations.AndroidmanagementEnterprisesWebAppsDeleteRequest) -> operations.AndroidmanagementEnterprisesWebAppsDeleteResponse:
        r"""Deletes a web app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesWebAppsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androidmanagement_enterprises_web_apps_get(self, request: operations.AndroidmanagementEnterprisesWebAppsGetRequest) -> operations.AndroidmanagementEnterprisesWebAppsGetResponse:
        r"""Gets a web app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesWebAppsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebApp])
                res.web_app = out

        return res

    
    def androidmanagement_enterprises_web_apps_list(self, request: operations.AndroidmanagementEnterprisesWebAppsListRequest) -> operations.AndroidmanagementEnterprisesWebAppsListResponse:
        r"""Lists web apps for a given enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/webApps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesWebAppsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListWebAppsResponse])
                res.list_web_apps_response = out

        return res

    
    def androidmanagement_enterprises_web_apps_patch(self, request: operations.AndroidmanagementEnterprisesWebAppsPatchRequest) -> operations.AndroidmanagementEnterprisesWebAppsPatchResponse:
        r"""Updates a web app.
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

        res = operations.AndroidmanagementEnterprisesWebAppsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebApp])
                res.web_app = out

        return res

    
    def androidmanagement_enterprises_web_tokens_create(self, request: operations.AndroidmanagementEnterprisesWebTokensCreateRequest) -> operations.AndroidmanagementEnterprisesWebTokensCreateResponse:
        r"""Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/webTokens", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidmanagementEnterprisesWebTokensCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebToken])
                res.web_token = out

        return res

    