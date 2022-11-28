import requests
from typing import Any
from sdk.models import operations
from . import utils

class CustomEvents:
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

    
    def custom_events_analytics(self, request: operations.CustomEventsAnalyticsRequest) -> operations.CustomEventsAnalyticsResponse:
        r"""Custom Events Analytics
        This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.
        
        ### Components Used
        -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",
                    \"count\" : (int)
                },
                ...
            ]
        }
        ```
        
        ### Fatal Error Response Codes
        The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
        
        | Error Code       | Reason / Cause                                                   |
        | ---------------- | ---------------------------------------------------------------- |
        | 400 Bad Request  | Bad Syntax                                                       |
        | 401 Unauthorized | Unknown or missing REST API Key                                  |
        | 429 Rate Limited | Over rate limit                                                  |
        | 5XX              | Internal server error, you should retry with exponential backoff |
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomEventsAnalyticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def custom_events_list(self, request: operations.CustomEventsListRequest) -> operations.CustomEventsListResponse:
        r"""Custom Events List
        This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"events\" : [
                \"Event A\",
                \"Event B\",
                \"Event C\",
                ...
            ]
        }
        ```
        
        ### Fatal Error Response Codes
        
        The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
        
        | Error Code       | Reason / Cause                                                   |
        | ---------------- | ---------------------------------------------------------------- |
        | 400 Bad Request  | Bad Syntax                                                       |
        | 401 Unauthorized | Unknown or missing REST API Key                                  |
        | 429 Rate Limited | Over rate limit                                                  |
        | 5XX              | Internal server error, you should retry with exponential backoff |
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    