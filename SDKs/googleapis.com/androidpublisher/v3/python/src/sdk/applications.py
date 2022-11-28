import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Applications:
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

    
    def androidpublisher_applications_device_tier_configs_create(self, request: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest) -> operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse:
        r"""Creates a new device tier config for an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/deviceTierConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceTierConfig])
                res.device_tier_config = out

        return res

    
    def androidpublisher_applications_device_tier_configs_get(self, request: operations.AndroidpublisherApplicationsDeviceTierConfigsGetRequest) -> operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse:
        r"""Returns a particular device tier config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceTierConfig])
                res.device_tier_config = out

        return res

    
    def androidpublisher_applications_device_tier_configs_list(self, request: operations.AndroidpublisherApplicationsDeviceTierConfigsListRequest) -> operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse:
        r"""Returns created device tier configs, ordered by descending creation time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/deviceTierConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDeviceTierConfigsResponse])
                res.list_device_tier_configs_response = out

        return res

    