import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Connectors:
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

    
    def connectors_all(self, request: operations.ConnectorsAllRequest) -> operations.ConnectorsAllResponse:
        r"""List Connectors
        List Connectors
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/connector/connectors"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConnectorsResponse])
                res.get_connectors_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BadRequestResponse])
                res.bad_request_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    
    def connectors_one(self, request: operations.ConnectorsOneRequest) -> operations.ConnectorsOneResponse:
        r"""Get Connector
        Get Connector
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/connector/connectors/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConnectorResponse])
                res.get_connector_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnauthorizedResponse])
                res.unauthorized_response = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentRequiredResponse])
                res.payment_required_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundResponse])
                res.not_found_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UnexpectedErrorResponse])
                res.unexpected_error_response = out

        return res

    