import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Metrics:
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

    
    def get_game_ppa(self, request: operations.GetGamePpaRequest) -> operations.GetGamePpaResponse:
        r"""Team Predicated Points Added (PPA/EPA) by game
        Predicted Points Added (PPA) by game
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ppa/games"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGamePpaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GamePpa]])
                res.game_ppas = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_player_game_ppa(self, request: operations.GetPlayerGamePpaRequest) -> operations.GetPlayerGamePpaResponse:
        r"""Player Predicated Points Added (PPA/EPA) broken down by game
        Predicted Points Added (PPA) by player game
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ppa/players/games"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayerGamePpaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayerGamePpa]])
                res.player_game_ppas = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_player_season_ppa(self, request: operations.GetPlayerSeasonPpaRequest) -> operations.GetPlayerSeasonPpaResponse:
        r"""Player Predicated Points Added (PPA/EPA) broken down by season
        Predicted Points Added (PPA) by player season
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ppa/players/season"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlayerSeasonPpaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayerSeasonPpa]])
                res.player_season_ppas = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_predicted_points(self, request: operations.GetPredictedPointsRequest) -> operations.GetPredictedPointsResponse:
        r"""Predicted Points (i.e. Expected Points or EP)
        Predicted Points
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ppa/predicted"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPredictedPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PredictedPoints]])
                res.predicted_points = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_pregame_win_probabilities(self, request: operations.GetPregameWinProbabilitiesRequest) -> operations.GetPregameWinProbabilitiesResponse:
        r"""Pregame win probability data
        Pregame win probabilities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/wp/pregame"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPregameWinProbabilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PregameWp]])
                res.pregame_wps = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_team_ppa(self, request: operations.GetTeamPpaRequest) -> operations.GetTeamPpaResponse:
        r"""Predicted Points Added (PPA/EPA) data by team
        Predicted Points Added (PPA)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ppa/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamPpaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamPpa]])
                res.team_ppas = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_win_probability_data(self, request: operations.GetWinProbabilityDataRequest) -> operations.GetWinProbabilityDataResponse:
        r"""Win probability chart data
        Win probability data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/wp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWinProbabilityDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlayWp]])
                res.play_wps = out
        elif r.status_code == 400:
            pass

        return res

    