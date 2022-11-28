import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Teams:
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

    
    def get_fbs_teams(self, request: operations.GetFbsTeamsRequest) -> operations.GetFbsTeamsResponse:
        r"""FBS team list
        Information on major division teams
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams/fbs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFbsTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_roster(self, request: operations.GetRosterRequest) -> operations.GetRosterResponse:
        r"""Team rosters
        Roster data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/roster"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRosterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Player]])
                res.players = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_talent(self, request: operations.GetTalentRequest) -> operations.GetTalentResponse:
        r"""Team talent composite rankings
        Team talent composite
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/talent"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTalentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamTalent]])
                res.team_talents = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_team_matchup(self, request: operations.GetTeamMatchupRequest) -> operations.GetTeamMatchupResponse:
        r"""Team matchup history
        Matchup history
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams/matchup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamMatchupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamMatchup])
                res.team_matchup = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_teams(self, request: operations.GetTeamsRequest) -> operations.GetTeamsResponse:
        r"""Team information
        Get team information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Team]])
                res.teams = out
        elif r.status_code == 400:
            pass

        return res

    