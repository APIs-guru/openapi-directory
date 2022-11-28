import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Tse:
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

    