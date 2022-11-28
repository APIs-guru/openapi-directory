import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Recruiting:
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

    
    def get_recruiting_groups(self, request: operations.GetRecruitingGroupsRequest) -> operations.GetRecruitingGroupsResponse:
        r"""Recruit position group ratings
        Gets a list of aggregated statistics by team and position grouping
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recruiting/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecruitingGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PositionGroupRecruitingRating]])
                res.position_group_recruiting_ratings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_recruiting_players(self, request: operations.GetRecruitingPlayersRequest) -> operations.GetRecruitingPlayersResponse:
        r"""Player recruiting ratings and rankings
        Get player recruiting rankings and data. Requires either a year or team to be specified.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recruiting/players"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecruitingPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Recruit]])
                res.recruits = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_recruiting_teams(self, request: operations.GetRecruitingTeamsRequest) -> operations.GetRecruitingTeamsResponse:
        r"""Team recruiting rankings and ratings
        Team recruiting rankings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recruiting/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecruitingTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamRecruitingRank]])
                res.team_recruiting_ranks = out
        elif r.status_code == 400:
            pass

        return res

    