import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Gifs:
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

    
    def get_gif_by_id(self, request: operations.GetGifByIDRequest) -> operations.GetGifByIDResponse:
        r"""Get GIF by Id
        Returns a GIF given that GIF's unique ID
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gifs/{gifId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGifByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGifByID200ApplicationJSON])
                res.get_gif_by_id_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_gifs_by_id(self, request: operations.GetGifsByIDRequest) -> operations.GetGifsByIDResponse:
        r"""Get GIFs by ID
        A multiget version of the get GIF by ID endpoint.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gifs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGifsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetGifsByID200ApplicationJSON])
                res.get_gifs_by_id_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def random_gif(self, request: operations.RandomGifRequest) -> operations.RandomGifResponse:
        r"""Random GIF
        Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gifs/random"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RandomGifResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RandomGif200ApplicationJSON])
                res.random_gif_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def search_gifs(self, request: operations.SearchGifsRequest) -> operations.SearchGifsResponse:
        r"""Search GIFs
        Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gifs/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGifsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchGifs200ApplicationJSON])
                res.search_gifs_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def translate_gif(self, request: operations.TranslateGifRequest) -> operations.TranslateGifResponse:
        r"""Translate phrase to GIF
        The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gifs/translate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslateGifResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TranslateGif200ApplicationJSON])
                res.translate_gif_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def trending_gifs(self, request: operations.TrendingGifsRequest) -> operations.TrendingGifsResponse:
        r"""Trending GIFs
        Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gifs/trending"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingGifsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TrendingGifs200ApplicationJSON])
                res.trending_gifs_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    