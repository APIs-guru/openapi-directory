

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://localhost:5000",
	"https://apispot.io/api",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def check_domain(self, request: operations.CheckDomainRequest) -> operations.CheckDomainResponse:
        r"""Check domain availability
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domain}/check", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckDomain200ApplicationJSON])
                res.check_domain_200_application_json_object = out

        return res

    
    def create_batch(self, request: operations.CreateBatchRequest) -> operations.CreateBatchResponse:
        r"""Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch = out

        return res

    
    def delete_batch(self, request: operations.DeleteBatchRequest) -> operations.DeleteBatchResponse:
        r"""Delete batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batch/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def domain_rank(self, request: operations.DomainRankRequest) -> operations.DomainRankResponse:
        r"""Check domain rank (authority).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domain}/rank", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainRankResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DomainRank200ApplicationJSON])
                res.domain_rank_200_application_json_object = out

        return res

    
    def get_batch(self, request: operations.GetBatchRequest) -> operations.GetBatchResponse:
        r"""Get batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batch/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch = out

        return res

    
    def get_batches(self) -> operations.GetBatchesResponse:
        r"""Get your batches
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batch"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.array_of_batch = out

        return res

    
    def query_db(self, request: operations.QueryDbRequest) -> operations.QueryDbResponse:
        r"""Query domain database
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/db"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QueryDbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.query_db_200_application_json_object = out

        return res

    
    def whois(self, request: operations.WhoisRequest) -> operations.WhoisResponse:
        r"""WHOIS query for a domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domain}/whois", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WhoisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    