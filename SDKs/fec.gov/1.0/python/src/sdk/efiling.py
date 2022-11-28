import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Efiling:
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

    
    def get_efile_filings_(self, request: operations.GetEfileFilingsRequest) -> operations.GetEfileFilingsResponse:
        r"""Basic information about electronic files coming into the FEC, posted as they are received.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/efile/filings/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EFilingsPage])
                res.e_filings_page = out

        return res

    
    def get_efile_reports_house_senate_(self, request: operations.GetEfileReportsHouseSenateRequest) -> operations.GetEfileReportsHouseSenateResponse:
        r"""
        Key financial data reported periodically by committees as they are reported. This feed includes summary
        information from the the House F3 reports, the presidential F3p reports and the PAC and party
        F3x reports.
        
        Generally, committees file reports on a quarterly or monthly basis, but
        some must also submit a report 12 days before primary elections. Therefore, during the primary
        season, the period covered by this file may be different for different committees. These totals
        also incorporate any changes made by committees, if any report covering the period is amended.
        
        DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
        label these fields while conveying clear meaning to ensure accessibility for all users.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/efile/reports/house-senate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileReportsHouseSenateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseF3FilingPage])
                res.base_f3_filing_page = out

        return res

    
    def get_efile_reports_pac_party_(self, request: operations.GetEfileReportsPacPartyRequest) -> operations.GetEfileReportsPacPartyResponse:
        r"""
        Key financial data reported periodically by committees as they are reported. This feed includes summary
        information from the the House F3 reports, the presidential F3p reports and the PAC and party
        F3x reports.
        
        Generally, committees file reports on a quarterly or monthly basis, but
        some must also submit a report 12 days before primary elections. Therefore, during the primary
        season, the period covered by this file may be different for different committees. These totals
        also incorporate any changes made by committees, if any report covering the period is amended.
        
        DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
        label these fields while conveying clear meaning to ensure accessibility for all users.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/efile/reports/pac-party/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileReportsPacPartyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseF3XFilingPage])
                res.base_f3_x_filing_page = out

        return res

    
    def get_efile_reports_presidential_(self, request: operations.GetEfileReportsPresidentialRequest) -> operations.GetEfileReportsPresidentialResponse:
        r"""
        Key financial data reported periodically by committees as they are reported. This feed includes summary
        information from the the House F3 reports, the presidential F3p reports and the PAC and party
        F3x reports.
        
        Generally, committees file reports on a quarterly or monthly basis, but
        some must also submit a report 12 days before primary elections. Therefore, during the primary
        season, the period covered by this file may be different for different committees. These totals
        also incorporate any changes made by committees, if any report covering the period is amended.
        
        DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
        label these fields while conveying clear meaning to ensure accessibility for all users.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/efile/reports/presidential/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileReportsPresidentialResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseF3PFilingPage])
                res.base_f3_p_filing_page = out

        return res

    