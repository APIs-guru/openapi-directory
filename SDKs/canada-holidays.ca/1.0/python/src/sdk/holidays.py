import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Holidays:
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

    
    def get_api_v1_holidays(self, request: operations.GetAPIV1HolidaysRequest) -> operations.GetAPIV1HolidaysResponse:
        r"""Get all holidays
        Returns Canadian public holidays. Each holiday lists the regions that observe it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/holidays"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1HolidaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV1Holidays200ApplicationJSON])
                res.get_api_v1_holidays_200_application_json_object = out

        return res

    
    def get_holidays_holiday_id(self, request: operations.GetHolidaysHolidayIDRequest) -> operations.GetHolidaysHolidayIDResponse:
        r"""Get a holiday by id
        Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/holidays/{holidayId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHolidaysHolidayIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHolidaysHolidayID200ApplicationJSON])
                res.get_holidays_holiday_id_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHolidaysHolidayID404ApplicationJSON])
                res.get_holidays_holiday_id_404_application_json_object = out

        return res

    