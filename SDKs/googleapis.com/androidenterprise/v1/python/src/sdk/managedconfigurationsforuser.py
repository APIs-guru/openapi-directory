import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Managedconfigurationsforuser:
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

    
    def androidenterprise_managedconfigurationsforuser_delete(self, request: operations.AndroidenterpriseManagedconfigurationsforuserDeleteRequest) -> operations.AndroidenterpriseManagedconfigurationsforuserDeleteResponse:
        r"""Removes a per-user managed configuration for an app for the specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseManagedconfigurationsforuserDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_managedconfigurationsforuser_get(self, request: operations.AndroidenterpriseManagedconfigurationsforuserGetRequest) -> operations.AndroidenterpriseManagedconfigurationsforuserGetResponse:
        r"""Retrieves details of a per-user managed configuration for an app for the specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseManagedconfigurationsforuserGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedConfiguration])
                res.managed_configuration = out

        return res

    
    def androidenterprise_managedconfigurationsforuser_list(self, request: operations.AndroidenterpriseManagedconfigurationsforuserListRequest) -> operations.AndroidenterpriseManagedconfigurationsforuserListResponse:
        r"""Lists all the per-user managed configurations for the specified user. Only the ID is set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseManagedconfigurationsforuserListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedConfigurationsForUserListResponse])
                res.managed_configurations_for_user_list_response = out

        return res

    
    def androidenterprise_managedconfigurationsforuser_update(self, request: operations.AndroidenterpriseManagedconfigurationsforuserUpdateRequest) -> operations.AndroidenterpriseManagedconfigurationsforuserUpdateResponse:
        r"""Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseManagedconfigurationsforuserUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedConfiguration])
                res.managed_configuration = out

        return res

    