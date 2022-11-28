import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Stickers:
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

    
    def random_sticker(self, request: operations.RandomStickerRequest) -> operations.RandomStickerResponse:
        r"""Random Sticker
        Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stickers/random"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RandomStickerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RandomSticker200ApplicationJSON])
                res.random_sticker_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def search_stickers(self, request: operations.SearchStickersRequest) -> operations.SearchStickersResponse:
        r"""Search Stickers
        Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stickers/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchStickersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SearchStickers200ApplicationJSON])
                res.search_stickers_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def translate_sticker(self, request: operations.TranslateStickerRequest) -> operations.TranslateStickerResponse:
        r"""Translate phrase to Sticker
        The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stickers/translate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslateStickerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TranslateSticker200ApplicationJSON])
                res.translate_sticker_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def trending_stickers(self, request: operations.TrendingStickersRequest) -> operations.TrendingStickersResponse:
        r"""Trending Stickers
        Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stickers/trending"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TrendingStickersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TrendingStickers200ApplicationJSON])
                res.trending_stickers_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    