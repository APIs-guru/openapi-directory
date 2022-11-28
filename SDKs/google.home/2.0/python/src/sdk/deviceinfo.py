import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class DeviceInfo:
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

    
    def app_device_id(self, request: operations.AppDeviceIDRequest) -> operations.AppDeviceIDResponse:
        r"""App Device ID
        This gives \"app device id\", \"certificate\" and \"signed data\".  
        The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  
        
        The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.
        
        Not sure what the other two are.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get_app_device_id"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppDeviceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example11])
                res.example11 = out
        elif r.status_code == 404:
            pass

        return res

    
    def check_ready_status(self, request: operations.CheckReadyStatusRequest) -> operations.CheckReadyStatusResponse:
        r"""Check Ready Status
        **Update:** This seems to have changed now and is no longer possible. The error is also new.
        
        Setting `play_ready_message` to true plays a welcome message on the device saying \"Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app.\"
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/check_ready_status"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckReadyStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example13])
                res.example13 = out

        return res

    
    def eureka_info(self, request: operations.EurekaInfoRequest) -> operations.EurekaInfoResponse:
        r"""Eureka Info
        This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`
        
        Nested items can also be filtered using the dot notation. Example: `audio.digital`
        
        The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.
        
        The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/eureka_info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EurekaInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example1])
                res.example1 = out

        return res

    
    def locales(self) -> operations.LocalesResponse:
        r"""Locales
        Simply returns a list of all supported locales.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/supported_locales"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LocalesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Example15]])
                res.example15s = out

        return res

    
    def offer(self) -> operations.OfferResponse:
        r"""Offer
        This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  
        A new token is generated for every request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/offer"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OfferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example12])
                res.example12 = out

        return res

    
    def test_internet_download_speed(self, request: operations.TestInternetDownloadSpeedRequest) -> operations.TestInternetDownloadSpeedResponse:
        r"""Test Internet Download Speed
        **Update:** This seems to have been removed. Returns 404 Not Found.
        
        This endpoint tests internet download speed. Any sample file URL can be provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/test_internet_download_speed"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestInternetDownloadSpeedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example16])
                res.example16 = out

        return res

    
    def timezones(self) -> operations.TimezonesResponse:
        r"""Timezones
        Simply returns a list of all supported timezones.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/supported_timezones"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TimezonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Example14]])
                res.example14s = out

        return res

    