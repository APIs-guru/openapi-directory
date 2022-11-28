import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Devices:
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

    
    def androidenterprise_devices_force_report_upload(self, request: operations.AndroidenterpriseDevicesForceReportUploadRequest) -> operations.AndroidenterpriseDevicesForceReportUploadResponse:
        r"""Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseDevicesForceReportUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_devices_get(self, request: operations.AndroidenterpriseDevicesGetRequest) -> operations.AndroidenterpriseDevicesGetResponse:
        r"""Retrieves the details of a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseDevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def androidenterprise_devices_get_state(self, request: operations.AndroidenterpriseDevicesGetStateRequest) -> operations.AndroidenterpriseDevicesGetStateResponse:
        r"""Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseDevicesGetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceState])
                res.device_state = out

        return res

    
    def androidenterprise_devices_list(self, request: operations.AndroidenterpriseDevicesListRequest) -> operations.AndroidenterpriseDevicesListResponse:
        r"""Retrieves the IDs of all of a user's devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DevicesListResponse])
                res.devices_list_response = out

        return res

    
    def androidenterprise_devices_set_state(self, request: operations.AndroidenterpriseDevicesSetStateRequest) -> operations.AndroidenterpriseDevicesSetStateResponse:
        r"""Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseDevicesSetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceState])
                res.device_state = out

        return res

    
    def androidenterprise_devices_update(self, request: operations.AndroidenterpriseDevicesUpdateRequest) -> operations.AndroidenterpriseDevicesUpdateResponse:
        r"""Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseDevicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    