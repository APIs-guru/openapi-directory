
__doc__ = """ SDK Documentation: http://byautomata.io - Find out more about Automata and other Market Intelligence products."""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.byautomata.io",
]


class SDK:
    r"""SDK Documentation: http://byautomata.io - Find out more about Automata and other Market Intelligence products."""

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
        
    
    
    
    def get_contentpro_search(self, request: operations.GetContentproSearchRequest) -> operations.GetContentproSearchResponse:
        r"""Send search terms to receive the most relevant articles and companies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contentpro-search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentproSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentproSearch200ApplicationJSON])
                res.get_contentpro_search_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 501:
            pass

        return res

    
    def get_search(self, request: operations.GetSearchRequest) -> operations.GetSearchResponse:
        r"""Send search terms to receive the most relevant companies along with text snippets.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSearch200ApplicationJSON])
                res.get_search_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 501:
            pass

        return res

    
    def get_similar(self, request: operations.GetSimilarRequest) -> operations.GetSimilarResponse:
        r"""Send a company website to receive a list of companies related to them.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/similar"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSimilar200ApplicationJSON])
                res.get_similar_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 501:
            pass

        return res

    
    def post_contentpro_similar_text(self, request: operations.PostContentproSimilarTextRequest) -> operations.PostContentproSimilarTextResponse:
        r"""The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/contentpro-similar-text"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostContentproSimilarTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostContentproSimilarText200ApplicationJSON])
                res.post_contentpro_similar_text_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 501:
            pass

        return res

    