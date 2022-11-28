import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Stats:
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

    
    def get_advanced_team_game_stats(self, request: operations.GetAdvancedTeamGameStatsRequest) -> operations.GetAdvancedTeamGameStatsResponse:
        r"""Advanced team metrics by game
        Advanced team game stats
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/game/advanced"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdvancedTeamGameStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AdvancedGameStat]])
                res.advanced_game_stats = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_advanced_team_season_stats(self, request: operations.GetAdvancedTeamSeasonStatsRequest) -> operations.GetAdvancedTeamSeasonStatsResponse:
        r"""Advanced team metrics by season
        Advanced team season stats
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/season/advanced"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdvancedTeamSeasonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AdvancedSeasonStat]])
                res.advanced_season_stats = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_stat_categories(self) -> operations.GetStatCategoriesResponse:
        r"""Team stat categories
        Stat category list
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/categories"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_stat_categories_200_application_json_strings = out

        return res

    
    def get_team_season_stats(self, request: operations.GetTeamSeasonStatsRequest) -> operations.GetTeamSeasonStatsResponse:
        r"""Team statistics by season
        Team season stats
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/season"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamSeasonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSeasonStat]])
                res.team_season_stats = out
        elif r.status_code == 400:
            pass

        return res

    