import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Tabledata:
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

    
    def bigquery_tabledata_insert_all(self, request: operations.BigqueryTabledataInsertAllRequest) -> operations.BigqueryTabledataInsertAllResponse:
        r"""Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryTabledataInsertAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TableDataInsertAllResponse])
                res.table_data_insert_all_response = out

        return res

    
    def bigquery_tabledata_list(self, request: operations.BigqueryTabledataListRequest) -> operations.BigqueryTabledataListResponse:
        r"""Retrieves table data from a specified set of rows. Requires the READER dataset role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryTabledataListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TableDataList])
                res.table_data_list = out

        return res

    