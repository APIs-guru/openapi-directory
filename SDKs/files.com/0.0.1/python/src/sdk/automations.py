import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Automations:
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

    
    def delete_automations_id(self, request: operations.DeleteAutomationsIDRequest) -> operations.DeleteAutomationsIDResponse:
        r"""Delete Automation
        Delete Automation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automations/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAutomationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def get_automations(self, request: operations.GetAutomationsRequest) -> operations.GetAutomationsResponse:
        r"""List Automations
        List Automations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/automations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AutomationEntity]])
                res.automation_entities = out
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

    
    def get_automations_id(self, request: operations.GetAutomationsIDRequest) -> operations.GetAutomationsIDResponse:
        r"""Show Automation
        Show Automation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automations/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAutomationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutomationEntity])
                res.automation_entity = out
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

    
    def patch_automations_id(self, request: operations.PatchAutomationsIDRequest) -> operations.PatchAutomationsIDResponse:
        r"""Update Automation
        Update Automation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/automations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAutomationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutomationEntity])
                res.automation_entity = out
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

    
    def post_automations(self, request: operations.PostAutomationsRequest) -> operations.PostAutomationsResponse:
        r"""Create Automation
        Create Automation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/automations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAutomationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutomationEntity])
                res.automation_entity = out
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

    