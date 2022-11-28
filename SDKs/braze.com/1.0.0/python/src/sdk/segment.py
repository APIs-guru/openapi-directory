import requests
from sdk.models import operations
from . import utils

class Segment:
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

    
    def segment_analytics(self, request: operations.SegmentAnalyticsRequest) -> operations.SegmentAnalyticsResponse:
        r"""Segment Analytics
        This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
        
        ### Request Components
        - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) date as ISO 8601 date,
                    \"size\" : (int) size of the segment on that date
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/segments/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SegmentAnalyticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def segment_details(self, request: operations.SegmentDetailsRequest) -> operations.SegmentDetailsResponse:
        r"""Segment Details
        This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
        
        ### Request Components
        - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
              \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
              \"created_at\" : (string) date created as ISO 8601 date,
              \"updated_at\" : (string) date last updated as ISO 8601 date,
              \"name\" : (string) segment name,
              \"description\" : (string) human-readable description of filters,
              \"text_description\" : (string) segment description, 
              \"tags\" : (array) tag names associated with the segment
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/segments/details"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SegmentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def segment_list(self, request: operations.SegmentListRequest) -> operations.SegmentListResponse:
        r"""Segment List
        This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
        
        ### Request Components
        - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
        
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"segments\" : [
                {
                    \"id\" : (string) Segment API Identifier,
                    \"name\" : (string) segment name,
                    \"analytics_tracking_enabled\" : (boolean) whether the segment has analytics tracking enabled,
                    \"tags\" : (array) tag names associated with the segment
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/segments/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SegmentListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    