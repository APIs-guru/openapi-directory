

import requests
from typing import List,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://covid19-api.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_daily_report_all_countries(self, request: operations.GetDailyReportAllCountriesRequest) -> operations.GetDailyReportAllCountriesResponse:
        r"""getDailyReportAllCountries
        Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/country/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportAllCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetDailyReportAllCountries200ApplicationJSON]])
                res.get_daily_report_all_countries_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_daily_report_by_country_code(self, request: operations.GetDailyReportByCountryCodeRequest) -> operations.GetDailyReportByCountryCodeResponse:
        r"""getDailyReportByCountryCode
        Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/country/code"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportByCountryCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetDailyReportByCountryCode200ApplicationJSON]])
                res.get_daily_report_by_country_code_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_daily_report_by_country_name(self, request: operations.GetDailyReportByCountryNameRequest) -> operations.GetDailyReportByCountryNameResponse:
        r"""getDailyReportByCountryName
        Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/country/name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportByCountryNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetDailyReportByCountryName200ApplicationJSON]])
                res.get_daily_report_by_country_name_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_daily_report_totals(self, request: operations.GetDailyReportTotalsRequest) -> operations.GetDailyReportTotalsResponse:
        r"""getDailyReportTotals
        Get daily report data for whole world.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/totals"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetDailyReportTotals200ApplicationJSON]])
                res.get_daily_report_totals_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_all_countries(self, request: operations.GetLatestAllCountriesRequest) -> operations.GetLatestAllCountriesResponse:
        r"""getLatestAllCountries
        Get latest data from all countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/country/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestAllCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetLatestAllCountries200ApplicationJSON]])
                res.get_latest_all_countries_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_country_data_by_code(self, request: operations.GetLatestCountryDataByCodeRequest) -> operations.GetLatestCountryDataByCodeResponse:
        r"""getLatestCountryDataByCode
        Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/country/code"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestCountryDataByCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetLatestCountryDataByCode200ApplicationJSON]])
                res.get_latest_country_data_by_code_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_country_data_by_name(self, request: operations.GetLatestCountryDataByNameRequest) -> operations.GetLatestCountryDataByNameResponse:
        r"""getLatestCountryDataByName
        Get latest data for specific country. Country name and format are in parametars.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/country"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestCountryDataByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetLatestCountryDataByName200ApplicationJSON]])
                res.get_latest_country_data_by_name_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_totals(self, request: operations.GetLatestTotalsRequest) -> operations.GetLatestTotalsResponse:
        r"""getLatestTotals
        Get latest data for whole world.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/totals"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetLatestTotals200ApplicationJSON]])
                res.get_latest_totals_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_list_of_countries(self, request: operations.GetListOfCountriesRequest) -> operations.GetListOfCountriesResponse:
        r"""getListOfCountries
        Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/help/countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetListOfCountries200ApplicationJSON]])
                res.get_list_of_countries_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    