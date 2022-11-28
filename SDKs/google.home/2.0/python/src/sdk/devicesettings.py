import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DeviceSettings:
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

    
    def night_modesettings(self, request: operations.NightModesettingsRequest) -> operations.NightModesettingsResponse:
        r"""Night Mode settings
        This sets night mode options.  
        To view currently set values, use /setup/eureka_info.  
        If `enabled` is set to false, night mode is disabled and the other values do not matter.  
        `led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
        `demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
        `windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/set_night_mode_params"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NightModesettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example17])
                res.example17 = out

        return res

    
    def rebootand_factory_reset(self, request: operations.RebootandFactoryResetRequest) -> operations.RebootandFactoryResetResponse:
        r"""Reboot and Factory Reset
        This can simply reboot the device (`params: \"now\"`) or factory reset the device (`params: \"fdr\"`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reboot"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RebootandFactoryResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def set_eureka_info(self, request: operations.SetEurekaInfoRequest) -> operations.SetEurekaInfoResponse:
        r"""Set Eureka Info
        This can set custom values to some options.
        
        Only fields to be modified need to be sent, not all. The example has some modifiable fields.
        
        TODO: List all modifiable fields.
        
        Sending non-existant fields will still return a 200 OK, but they are not saved.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/set_eureka_info"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetEurekaInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    