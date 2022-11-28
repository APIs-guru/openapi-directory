import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Ratings:
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

    
    def get_conference_sp_ratings(self, request: operations.GetConferenceSpRatingsRequest) -> operations.GetConferenceSpRatingsResponse:
        r"""Historical SP+ ratings by conference
        Get average SP+ historical rating data by conference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ratings/sp/conferences"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConferenceSpRatingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConferenceSpRating]])
                res.conference_sp_ratings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_sp_ratings(self, request: operations.GetSpRatingsRequest) -> operations.GetSpRatingsResponse:
        r"""Historical SP+ ratings
        SP+ rating data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ratings/sp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpRatingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSpRating]])
                res.team_sp_ratings = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_srs_ratings(self, request: operations.GetSrsRatingsRequest) -> operations.GetSrsRatingsResponse:
        r"""Historical SRS ratings
        SRS rating data (requires either a year or team specified)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ratings/srs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSrsRatingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TeamSrsRating]])
                res.team_srs_ratings = out
        elif r.status_code == 400:
            pass

        return res

    