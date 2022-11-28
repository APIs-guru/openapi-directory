import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class StromQuittung:
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

    
    def quittung_comit(self, request: operations.QuittungComitRequest) -> operations.QuittungComitResponse:
        r"""Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
        Uses collected fields or provided fields to create a final receipt (Strom-Quittung).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/commit"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungComitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.quittung_comit_200_application_json_string = r.content

        return res

    
    def quittung_create(self, request: operations.QuittungCreateRequest) -> operations.QuittungCreateResponse:
        r"""Create a receipt for an energy delivery (only valid in Germany).
        Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/create"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.quittung_create_200_application_json_string = r.content

        return res

    
    def quittung_prepare(self, request: operations.QuittungPrepareRequest) -> operations.QuittungPrepareResponse:
        r"""Allows to collect data with several requests (or a single) for a receipt.
        During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/prepare"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungPrepareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.quittung_prepare_200_application_json_string = r.content

        return res

    
    def quittung_tse(self, request: operations.QuittungTseRequest) -> operations.QuittungTseResponse:
        r"""Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
        Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/tse"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungTseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.QuittungTse200ApplicationJSON])
                res.quittung_tse_200_application_json_object = out

        return res

    
    def quittung_tse_data(self, request: operations.QuittungTseDataRequest) -> operations.QuittungTseDataResponse:
        r"""Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
        Allows to retrieve input string for a signing process.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/tsedata"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungTseDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def quittung_ts_esignature(self, request: operations.QuittungTsEsignatureRequest) -> operations.QuittungTsEsignatureResponse:
        r"""Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
        Allows to retrieve digital signature for a given receipt.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/tsesignature"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungTsEsignatureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def quittung_zugferd(self, request: operations.QuittungZugferdRequest) -> operations.QuittungZugferdResponse:
        r"""Retrieve Zugferd XML for a given receipt (Strom-Quittung).
        Allows to retrieve XML of the zugferd invoice.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/quittung/zugferd"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QuittungZugferdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    