import requests
from typing import List,Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class GlobalRules:
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

    
    def create_global_rule(self, request: operations.CreateGlobalRuleRequest) -> operations.CreateGlobalRuleResponse:
        r"""Create global rule
        Adds a rule to the list of globally configured rules.
        
        This operation can fail for the following reasons:
        
        * The rule type is unknown (HTTP error `400`)
        * The rule already exists (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateGlobalRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_all_global_rules(self) -> operations.DeleteAllGlobalRulesResponse:
        r"""Delete all global rules
        Deletes all globally configured rules.
        
        This operation can fail for the following reasons:
        
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAllGlobalRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def delete_global_rule(self, request: operations.DeleteGlobalRuleRequest) -> operations.DeleteGlobalRuleResponse:
        r"""Delete global rule
        Deletes a single global rule.  If this is the only rule configured, this is the same
        as deleting **all** rules.
        
        This operation can fail for the following reasons:
        
        * Invalid rule name/type (HTTP error `400`)
        * No rule with name/type `rule` exists (HTTP error `404`)
        * Rule cannot be deleted (HTTP error `409`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{rule}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteGlobalRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_global_rule_config(self, request: operations.GetGlobalRuleConfigRequest) -> operations.GetGlobalRuleConfigResponse:
        r"""Get global rule configuration
        Returns information about the named globally configured rule.
        
        This operation can fail for the following reasons:
        
        * Invalid rule name/type (HTTP error `400`)
        * No rule with name/type `rule` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{rule}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGlobalRuleConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rule])
                res.rule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def list_global_rules(self) -> operations.ListGlobalRulesResponse:
        r"""List global rules
        Gets a list of all the currently configured global rules (if any).
        
        This operation can fail for the following reasons:
        
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListGlobalRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RuleTypeEnum]])
                res.rule_types = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def update_global_rule_config(self, request: operations.UpdateGlobalRuleConfigRequest) -> operations.UpdateGlobalRuleConfigResponse:
        r"""Update global rule configuration
        Updates the configuration for a globally configured rule.
        
        This operation can fail for the following reasons:
        
        * Invalid rule name/type (HTTP error `400`)
        * No rule with name/type `rule` exists (HTTP error `404`)
        * A server error occurred (HTTP error `500`)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{rule}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGlobalRuleConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rule])
                res.rule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    