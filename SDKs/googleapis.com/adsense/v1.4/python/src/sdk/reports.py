import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Reports:
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

    
    def adsense_reports_generate(self, request: operations.AdsenseReportsGenerateRequest) -> operations.AdsenseReportsGenerateResponse:
        r"""Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseReportsGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdsenseReportsGenerateResponse])
                res.adsense_reports_generate_response = out

        return res

    
    def adsense_reports_saved_generate(self, request: operations.AdsenseReportsSavedGenerateRequest) -> operations.AdsenseReportsSavedGenerateResponse:
        r"""Generate an AdSense report based on the saved report ID sent in the query parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reports/{savedReportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseReportsSavedGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdsenseReportsGenerateResponse])
                res.adsense_reports_generate_response = out

        return res

    
    def adsense_reports_saved_list(self, request: operations.AdsenseReportsSavedListRequest) -> operations.AdsenseReportsSavedListResponse:
        r"""List all saved reports in this AdSense account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/saved"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseReportsSavedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SavedReports])
                res.saved_reports = out

        return res

    