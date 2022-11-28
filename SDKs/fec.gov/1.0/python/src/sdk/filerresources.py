import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FilerResources:
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

    
    def get_rad_analyst_(self, request: operations.GetRadAnalystRequest) -> operations.GetRadAnalystResponse:
        r"""
        Use this endpoint to look up the RAD Analyst for a committee.
        
        The mission of the Reports Analysis Division (RAD) is to ensure that
        campaigns and political committees file timely and accurate reports that fully disclose
        their financial activities.  RAD is responsible for reviewing statements and financial
        reports filed by political committees participating in federal elections, providing
        assistance and guidance to the committees to properly file their reports, and for taking
        appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rad-analyst/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRadAnalystResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RadAnalystPage])
                res.rad_analyst_page = out

        return res

    
    def get_state_election_office_(self, request: operations.GetStateElectionOfficeRequest) -> operations.GetStateElectionOfficeResponse:
        r"""
        State laws and procedures govern elections for state or local offices as well as
        how candidates appear on election ballots.
        Contact the appropriate state election office for more information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/state-election-office/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateElectionOfficeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StateElectionOfficeInfoPage])
                res.state_election_office_info_page = out

        return res

    