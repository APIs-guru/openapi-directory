import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Plays:
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

    
    def get_play_stat_types(self) -> operations.GetPlayStatTypesResponse:
        r"""Types of player play stats
        Type of play stats
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/play/stat/types"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayStatTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayStatType]])
                res.play_stat_types = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_play_stats(self, request: operations.GetPlayStatsRequest) -> operations.GetPlayStatsResponse:
        r"""Play stats by play
        Gets player stats associated by play (limit 1000)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/play/stats"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayStat]])
                res.play_stats = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_play_types(self) -> operations.GetPlayTypesResponse:
        r"""Play types
        Types of plays
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/play/types"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayType]])
                res.play_types = out

        return res

    
    def get_plays(self, request: operations.GetPlaysRequest) -> operations.GetPlaysResponse:
        r"""Play by play data
        Get play data and results
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plays"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Play]])
                res.plays = out

        return res

    