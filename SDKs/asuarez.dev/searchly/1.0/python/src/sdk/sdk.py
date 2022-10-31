import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://searchly.asuarez.dev/api/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def src_searchly_api_v1_controllers_similarity_by_content(self, request: operations.SrcSearchlyAPIV1ControllersSimilarityByContentRequest) -> operations.SrcSearchlyAPIV1ControllersSimilarityByContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/similarity/by_content"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/similarity/by_song"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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

    
    def src_searchly_api_v1_controllers_song_search(self, request: operations.SrcSearchlyAPIV1ControllersSongSearchRequest) -> operations.SrcSearchlyAPIV1ControllersSongSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/song/search"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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

    