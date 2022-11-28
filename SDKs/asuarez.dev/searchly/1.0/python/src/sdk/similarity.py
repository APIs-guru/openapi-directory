import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Similarity:
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

    
    def src_searchly_api_v1_controllers_similarity_by_content(self, request: operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequest) -> operations.SrcSearchlyAPIV1ControllersSimilarityByContentResponse:
        r"""API endpoint to search similarity using content
        Endpoint for an end-user client to search similarity by content.
        
        If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
        
        ```
        https://searchly.asuarez.dev/api/v1/similarity/by_content
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/similarity/by_content"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SrcSearchlyAPIV1ControllersSimilarityByContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSimilarity])
                res.api_response_similarity = out
        else:
            if utils.match_content_type(content_type, "application/text"):
                res.src_searchly_api_v1_controllers_similarity_by_content_default_application_text_string = r.content

        return res

    
    def src_searchly_api_v1_controllers_similarity_by_song(self, request: operations.SrcSearchlyAPIV1ControllersSimilarityBySongRequest) -> operations.SrcSearchlyAPIV1ControllersSimilarityBySongResponse:
        r"""API endpoint to search similarity using a song identifier
        Endpoint for an end-user client to search similarity by song identifier.
        
        If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
        
        ```
        https://searchly.asuarez.dev/api/v1/similarity/by_song
        ```
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/similarity/by_song"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SrcSearchlyAPIV1ControllersSimilarityBySongResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSimilarity])
                res.api_response_similarity = out
        else:
            if utils.match_content_type(content_type, "application/text"):
                res.src_searchly_api_v1_controllers_similarity_by_song_default_application_text_string = r.content

        return res

    