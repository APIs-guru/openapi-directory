import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Song:
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

    
    def src_searchly_api_v1_controllers_song_search(self, request: operations.SrcSearchlyAPIV1ControllersSongSearchRequest) -> operations.SrcSearchlyAPIV1ControllersSongSearchResponse:
        r"""API endpoint to search songs from the database given a query
        Endpoint for an end-user client to search songs from the database given a String query.
        
        If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
        
        ```
        https://searchly.asuarez.dev/api/v1/song/search
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/song/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SrcSearchlyAPIV1ControllersSongSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSong])
                res.api_response_song = out
        else:
            if utils.match_content_type(content_type, "application/text"):
                res.src_searchly_api_v1_controllers_song_search_default_application_text_string = r.content

        return res

    