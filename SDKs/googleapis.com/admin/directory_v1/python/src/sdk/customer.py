import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Customer:
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

    
    def admin_customer_devices_chromeos_commands_get(self, request: operations.AdminCustomerDevicesChromeosCommandsGetRequest) -> operations.AdminCustomerDevicesChromeosCommandsGetResponse:
        r"""Gets command data a specific command issued to the device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomerDevicesChromeosCommandsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryChromeosdevicesCommand])
                res.directory_chromeosdevices_command = out

        return res

    
    def admin_customer_devices_chromeos_issue_command(self, request: operations.AdminCustomerDevicesChromeosIssueCommandRequest) -> operations.AdminCustomerDevicesChromeosIssueCommandResponse:
        r"""Issues a command for the device to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomerDevicesChromeosIssueCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryChromeosdevicesIssueCommandResponse])
                res.directory_chromeosdevices_issue_command_response = out

        return res

    