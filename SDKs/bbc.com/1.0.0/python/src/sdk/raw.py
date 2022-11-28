import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Raw:
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

    
    def get_raw_ancestors(self, request: operations.GetRawAncestorsRequest) -> operations.GetRawAncestorsResponse:
        r"""Get raw ancestors
        Get raw ancestors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/episodes/{pid}/ancestors/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawAncestorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_brand(self, request: operations.GetRawBrandRequest) -> operations.GetRawBrandResponse:
        r"""Get raw brand
        Get raw brand
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/brands/{pid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawBrandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_brand_franchises(self, request: operations.GetRawBrandFranchisesRequest) -> operations.GetRawBrandFranchisesResponse:
        r"""Get raw brand franchise
        Get raw brand franchises
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/brands/{pid}/franchises/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawBrandFranchisesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_episode(self, request: operations.GetRawEpisodeRequest) -> operations.GetRawEpisodeResponse:
        r"""Get raw episode
        Get raw episode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/episodes/{pid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawEpisodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_formats(self, request: operations.GetRawFormatsRequest) -> operations.GetRawFormatsResponse:
        r"""Get raw formats
        Get raw formats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/episodes/{pid}/formats/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawFormatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_genre_groups(self, request: operations.GetRawGenreGroupsRequest) -> operations.GetRawGenreGroupsResponse:
        r"""Get raw genre groups
        Get raw genre groups
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/episodes/{pid}/genre_groups/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawGenreGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_image(self, request: operations.GetRawImageRequest) -> operations.GetRawImageResponse:
        r"""Get raw image
        Get raw image
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/images/{pid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_masterbrand(self, request: operations.GetRawMasterbrandRequest) -> operations.GetRawMasterbrandResponse:
        r"""Get raw masterbrand
        Get raw masterbrand
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/master_brands/{mbid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawMasterbrandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_raw_promotion(self, request: operations.GetRawPromotionRequest) -> operations.GetRawPromotionResponse:
        r"""Get raw promotion
        Get raw promotion
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/promotions/{pid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.nitro = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    