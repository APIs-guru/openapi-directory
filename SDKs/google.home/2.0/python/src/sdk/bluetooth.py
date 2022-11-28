import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Bluetooth:
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

    
    def change_discoverability(self, request: operations.ChangeDiscoverabilityRequest) -> operations.ChangeDiscoverabilityResponse:
        r"""Change Discoverability
        *See note for Bluetooth under `/setup/bluetooth/status`*
        
        **For Part 1 only**
        
        This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/discovery"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeDiscoverabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def forgetpaireddevice(self, request: operations.ForgetpaireddeviceRequest) -> operations.ForgetpaireddeviceResponse:
        r"""Forget paired device
        *See note for Bluetooth under `/setup/bluetooth/status`*
        
        **For both parts**
        
        This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/bond"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForgetpaireddeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_paired_devices(self) -> operations.GetPairedDevicesResponse:
        r"""Get Paired Devices
        *See note for Bluetooth under `/setup/bluetooth/status`*
        
        **For both parts**
        
        This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/get_bonded"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPairedDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Example111]])
                res.example111s = out

        return res

    
    def get_scan_results(self) -> operations.GetScanResultsResponse:
        r"""Get Scan Results
        *See note for Bluetooth under `/setup/bluetooth/status`*
        
        **For Part 2 only**
        
        This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.
        
        `rssi` is signal strength, `name` is name, `mac_address` is mac address.  
        `device_class` and `device_type` are bluetooth codes.  
        
        The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/scan_results"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScanResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Example112]])
                res.example112s = out

        return res

    
    def pairwith_speaker(self, request: operations.PairwithSpeakerRequest) -> operations.PairwithSpeakerResponse:
        r"""Pair with Speaker
        *See note for Bluetooth under `/setup/bluetooth/status`*
        
        **For Part 2 only**
        
        This pairs with other bluetooth speakers by mac address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/connect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PairwithSpeakerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def scanfordevices(self, request: operations.ScanfordevicesRequest) -> operations.ScanfordevicesResponse:
        r"""Scan for devices
        *See note for Bluetooth under `/setup/bluetooth/status`*
        
        **For Part 2 only**
        
        This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
        To get the scan results, see /setup/bluetooth/scan_results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/scan"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ScanfordevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def status(self) -> operations.StatusResponse:
        r"""Status
        > **There are 2 parts of Bluetooth.**
        >
        > *Part 1*: Devices like phones connect to Home and play audio through Home.  
        > For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
        >
        > *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
        > For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
        >
        > The other endpoints are common for both parts.
        
        
        **For both parts**
        
        This gives the status of all bluetooth things.
        - Not sure what `audio_mode` is.
        - `discovery_enabled` states whether Home is discoverable. (**Part 1**)
        - `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
        - `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
        - `connected_devices` is a list of all speakers connected to Home. (**Part 2**)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bluetooth/status"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example110])
                res.example110 = out

        return res

    