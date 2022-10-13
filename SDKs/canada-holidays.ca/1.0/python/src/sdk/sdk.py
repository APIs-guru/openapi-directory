import warnings
import requests
from typing import Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://canada-holidays.ca",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_api_v1_holidays(self, request: operations.GetAPIV1HolidaysRequest) -> operations.GetAPIV1HolidaysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v1/holidays"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1HolidaysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV1Holidays200ApplicationJSON])
                res.get_api_v1_holidays_200_application_json_object = out

        return res

    
    
    def get_api_v1_provinces(self, request: operations.GetAPIV1ProvincesRequest) -> operations.GetAPIV1ProvincesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v1/provinces"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1ProvincesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV1Provinces200ApplicationJSON])
                res.get_api_v1_provinces_200_application_json_object = out

        return res

    
    
    def get_api_v1_provinces_province_id(self, request: operations.GetAPIV1ProvincesProvinceIDRequest) -> operations.GetAPIV1ProvincesProvinceIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/provinces/{provinceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1ProvincesProvinceIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV1ProvincesProvinceID200ApplicationJSON])
                res.get_api_v1_provinces_province_id_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIV1ProvincesProvinceID404ApplicationJSON])
                res.get_api_v1_provinces_province_id_404_application_json_object = out

        return res

    
    
    def get_api_vi(self) -> operations.GetAPIViResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/v1"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIViResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAPIVi200ApplicationJSON])
                res.get_api_vi_200_application_json_object = out

        return res

    
    
    def get_holidays_holiday_id(self, request: operations.GetHolidaysHolidayIDRequest) -> operations.GetHolidaysHolidayIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/v1/holidays/{holidayId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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

    