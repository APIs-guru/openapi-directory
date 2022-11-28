import requests
from sdk.models import operations
from . import utils

class Kpi:
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

    
    def daily_active_users_by_date(self, request: operations.DailyActiveUsersByDateRequest) -> operations.DailyActiveUsersByDateResponse:
        r"""Daily Active Users by Date
        This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) date as ISO 8601 date,
                    \"dau\" : (int)
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/kpi/dau/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DailyActiveUsersByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def daily_new_users_by_date(self, request: operations.DailyNewUsersByDateRequest) -> operations.DailyNewUsersByDateResponse:
        r"""Daily New Users by Date
        This endpoint allows you to retrieve a daily series of the total number of new users on each date.
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) date as ISO 8601 date,
                    \"new_users\" : (int)
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/kpi/new_users/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DailyNewUsersByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def kp_is_for_daily_app_uninstalls_by_date(self, request: operations.KpIsForDailyAppUninstallsByDateRequest) -> operations.KpIsForDailyAppUninstallsByDateResponse:
        r"""KPIs for Daily App Uninstalls by Date
        This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) date as ISO 8601 date,
                    \"uninstalls\" : (int)
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/kpi/uninstalls/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.KpIsForDailyAppUninstallsByDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def monthly_active_users_for_last30_days(self, request: operations.MonthlyActiveUsersForLast30DaysRequest) -> operations.MonthlyActiveUsersForLast30DaysResponse:
        r"""Monthly Active Users for Last 30 Days
        This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) date as ISO 8601 date,
                    \"mau\" : (int)
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/kpi/mau/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonthlyActiveUsersForLast30DaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    