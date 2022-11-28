import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class HistoryExportResults:
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

    
    def get_history_export_results(self, request: operations.GetHistoryExportResultsRequest) -> operations.GetHistoryExportResultsResponse:
        r"""List History Export Results
        List History Export Results
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/history_export_results"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHistoryExportResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.HistoryExportResultEntity]])
                res.history_export_result_entities = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 405:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 412:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 423:
            pass
        elif r.status_code == 429:
            pass

        return res

    