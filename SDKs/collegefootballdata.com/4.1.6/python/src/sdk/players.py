import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Players:
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

    
    def get_player_season_stats(self, request: operations.GetPlayerSeasonStatsRequest) -> operations.GetPlayerSeasonStatsResponse:
        r"""Player stats by season
        Season player stats
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/player/season"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayerSeasonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayerSeasonStat]])
                res.player_season_stats = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_player_usage(self, request: operations.GetPlayerUsageRequest) -> operations.GetPlayerUsageResponse:
        r"""Player usage metrics broken down by season
        Player usage metrics by season
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/player/usage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayerUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayerUsage]])
                res.player_usages = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_returning_production(self, request: operations.GetReturningProductionRequest) -> operations.GetReturningProductionResponse:
        r"""Team returning production metrics
        Returning production metrics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/player/returning"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReturningProductionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReturningProduction]])
                res.returning_productions = out
        elif r.status_code == 400:
            pass

        return res

    
    def player_search(self, request: operations.PlayerSearchRequest) -> operations.PlayerSearchResponse:
        r"""Search for player information
        Search for players
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/player/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayerSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayerSearchResult]])
                res.player_search_results = out
        elif r.status_code == 400:
            pass

        return res

    