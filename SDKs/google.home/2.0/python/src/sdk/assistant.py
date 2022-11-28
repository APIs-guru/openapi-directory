import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Assistant:
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

    
    def accessibility(self, request: operations.AccessibilityRequest) -> operations.AccessibilityResponse:
        r"""Accessibility
        This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
        Sending an empty-body POST request returns the current values.  
        Either of the fields or both can be sent and new values will be saved.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/a11y_mode"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccessibilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Getcurrentvalues])
                res.getcurrentvalues = out

        return res

    
    def alarm_volume(self, request: operations.AlarmVolumeRequest) -> operations.AlarmVolumeResponse:
        r"""Alarm Volume
        This gets and sets alarms and timers volume.  
        **Note:** This is not the same as normal volume.
        
        Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
        Sending an empty body gets the volume. Sending `volume` sets the volume.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/alarms/volume"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AlarmVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Getvolume])
                res.getvolume = out

        return res

    
    def delete_alarmsand_timers(self, request: operations.DeleteAlarmsandTimersRequest) -> operations.DeleteAlarmsandTimersResponse:
        r"""Delete Alarms and Timers
        This deletes alarms and timers by their id.
        
        `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/alarms/delete"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlarmsandTimersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example19])
                res.example19 = out

        return res

    
    def do_not_disturb(self, request: operations.DoNotDisturbRequest) -> operations.DoNotDisturbResponse:
        r"""Do Not Disturb
        This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/notifications"
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoNotDisturbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Getcurrentstate])
                res.getcurrentstate = out

        return res

    
    def get_alarmsand_timers(self) -> operations.GetAlarmsandTimersResponse:
        r"""Get Alarms and Timers
        This gives a list of all active alarms and timers.
        
        Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).
        
        Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
        `status` is 1 for set up and 2 for ringing.
        
        Timers have `original_duration` is the original duration.  
        `status` is 1 for set up and 3 for ringing.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/assistant/alarms"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlarmsandTimersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Example18])
                res.example18 = out

        return res

    
    def set_equalizer_values(self, request: operations.SetEqualizerValuesRequest) -> operations.SetEqualizerValuesResponse:
        r"""Set Equalizer Values
        This can only set new equalizer values. To get already set values, use /setup/eureka_info.
        
        The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
        
        `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
        
        Default values are 0 for both.  
        While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user_eq/set_equalizer"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetEqualizerValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    