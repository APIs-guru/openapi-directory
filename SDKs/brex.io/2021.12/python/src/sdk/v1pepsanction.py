import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class V1Pepsanction:
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

    
    def pep_monitor_list(self, request: operations.PepMonitorListRequest) -> operations.PepMonitorListResponse:
        r"""Retrieves a list of monitor entries
        Retrieve a list of all active Pep Sanction Report monitors for this account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/pepsanction/monitor/list"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PepMonitorListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.pep_monitor_list_200_application_json_anies = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_monitor_list_default_application_json_any = out

        return res

    
    def pep_monitor_unregister(self, request: operations.PepMonitorUnregisterRequest) -> operations.PepMonitorUnregisterResponse:
        r"""Deactive a pep sanction monitor
        Unregister a previously created Pep Sanction Report Monitor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/pepsanction/monitor/unregister/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PepMonitorUnregisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_monitor_unregister_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_monitor_unregister_default_application_json_any = out

        return res

    
    def pep_monitor_update(self, request: operations.PepMonitorUpdateRequest) -> operations.PepMonitorUpdateResponse:
        r"""Update details of active Pep Sanction monitor
        Update the webhook URL of an active Pep Sanction Report Monitor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/pepsanction/monitor/update/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PepMonitorUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_monitor_update_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_monitor_update_default_application_json_any = out

        return res

    
    def pep_order(self, request: operations.PepOrderRequest) -> operations.PepOrderResponse:
        r"""Orders a new Pep Sanction Check Report
        Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/pepsanction/order/{type}/{search}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PepOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_order_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_order_default_application_json_any = out

        return res

    
    def pep_retrieve(self, request: operations.PepRetrieveRequest) -> operations.PepRetrieveResponse:
        r"""Returns a json or pdf report
        Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/pepsanction/retrieve/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PepRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_retrieve_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pep_retrieve_default_application_json_any = out

        return res

    