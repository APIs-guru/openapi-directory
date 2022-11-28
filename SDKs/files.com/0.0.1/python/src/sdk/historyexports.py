import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class HistoryExports:
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

    
    def get_history_exports_id(self, request: operations.GetHistoryExportsIDRequest) -> operations.GetHistoryExportsIDResponse:
        r"""Show History Export
        Show History Export
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/history_exports/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHistoryExportsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryExportEntity])
                res.history_export_entity = out
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

    
    def post_history_exports(self, request: operations.PostHistoryExportsRequest) -> operations.PostHistoryExportsResponse:
        r"""Create History Export
        Create History Export
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/history_exports"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostHistoryExportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryExportEntity])
                res.history_export_entity = out
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

    