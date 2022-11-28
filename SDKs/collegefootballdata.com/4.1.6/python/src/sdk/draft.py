import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Draft:
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

    
    def get_draft_picks(self, request: operations.GetDraftPicksRequest) -> operations.GetDraftPicksResponse:
        r"""List of NFL Draft picks
        List of NFL Draft picks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/draft/picks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDraftPicksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DraftPick]])
                res.draft_picks = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_nfl_positions(self) -> operations.GetNflPositionsResponse:
        r"""List of NFL positions
        List of NFL positions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/draft/positions"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNflPositionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DraftPosition]])
                res.draft_positions = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_nfl_teams(self) -> operations.GetNflTeamsResponse:
        r"""List of NFL teams
        List of NFL teams
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/draft/teams"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNflTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DraftTeam]])
                res.draft_teams = out
        elif r.status_code == 400:
            pass

        return res

    