import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class DNSRecords:
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

    
    def delete_dns_domain_name_records_record_id_(self, request: operations.DeleteDNSDomainNameRecordsRecordIDRequest) -> operations.DeleteDNSDomainNameRecordsRecordIDResponse:
        r"""Delete a record
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/{domainName}/records/{recordId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDNSDomainNameRecordsRecordIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_dns_domain_name_records(self, request: operations.GetDNSDomainNameRecordsRequest) -> operations.GetDNSDomainNameRecordsResponse:
        r"""Get records
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/{domainName}/records", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDNSDomainNameRecordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DNSRecord]])
                res.dns_records = out

        return res

    
    def get_dns_domain_name_records_record_id_(self, request: operations.GetDNSDomainNameRecordsRecordIDRequest) -> operations.GetDNSDomainNameRecordsRecordIDResponse:
        r"""Get specific record
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/{domainName}/records/{recordId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDNSDomainNameRecordsRecordIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DNSRecord])
                res.dns_record = out

        return res

    
    def post_dns_domain_name_records(self, request: operations.PostDNSDomainNameRecordsRequest) -> operations.PostDNSDomainNameRecordsResponse:
        r"""Create a record
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/{domainName}/records", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDNSDomainNameRecordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def put_dns_domain_name_records_record_id_(self, request: operations.PutDNSDomainNameRecordsRecordIDRequest) -> operations.PutDNSDomainNameRecordsRecordIDResponse:
        r"""Edit a record
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/{domainName}/records/{recordId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDNSDomainNameRecordsRecordIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    