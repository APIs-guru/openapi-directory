import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Games:
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

    
    def get_advanced_box_score(self, request: operations.GetAdvancedBoxScoreRequest) -> operations.GetAdvancedBoxScoreResponse:
        r"""Advanced box scores
        Get advanced box score data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/game/box/advanced"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdvancedBoxScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BoxScore])
                res.box_score = out

        return res

    
    def get_calendar(self, request: operations.GetCalendarRequest) -> operations.GetCalendarResponse:
        r"""Season calendar
        Get calendar of weeks by season
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calendar"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Week]])
                res.weeks = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_game_media(self, request: operations.GetGameMediaRequest) -> operations.GetGameMediaResponse:
        r"""Game media information and schedules
        Game media information (TV, radio, etc)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/media"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGameMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GameMedia]])
                res.game_medias = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_game_weather(self, request: operations.GetGameWeatherRequest) -> operations.GetGameWeatherResponse:
        r"""Game weather information (Patreon only)
        Weather information for the hour of kickoff
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/weather"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGameWeatherResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GameWeather]])
                res.game_weathers = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_games(self, request: operations.GetGamesRequest) -> operations.GetGamesResponse:
        r"""Games and results
        Get game results
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Game]])
                res.games = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_player_game_stats(self, request: operations.GetPlayerGameStatsRequest) -> operations.GetPlayerGameStatsResponse:
        r"""Player game stats
        Player stats broken down by game
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/players"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayerGameStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayerGame]])
                res.player_games = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_team_game_stats(self, request: operations.GetTeamGameStatsRequest) -> operations.GetTeamGameStatsResponse:
        r"""Team game stats
        Team stats broken down by game
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamGameStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamGame]])
                res.team_games = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_team_records(self, request: operations.GetTeamRecordsRequest) -> operations.GetTeamRecordsResponse:
        r"""Team records
        Get team records by year
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/records"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamRecordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamRecord]])
                res.team_records = out
        elif r.status_code == 400:
            pass

        return res

    