import requests
from sdk.models import operations
from . import utils

class SessionAnalytics:
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

    
    def app_sessions_by_time(self, request: operations.AppSessionsByTimeRequest) -> operations.AppSessionsByTimeResponse:
        r"""App Sessions by Time
        This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.
        
        ### Components Used
        - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
        
        ## Response
        
        ```json
        Content-Type: application/json
        Authorization: Bearer YOUR-REST-API-KEY
        {
            \"message\": (required, string) the status of the export, returns 'success' when completed without errors,
            \"data\" : [
                {
                    \"time\" : (string) point in time - as ISO 8601 extended when unit is \"hour\" and as ISO 8601 date when unit is \"day\",
                    \"sessions\" : (int)
                },
                ...
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sessions/data_series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppSessionsByTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    