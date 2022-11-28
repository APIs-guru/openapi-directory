import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Routines:
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

    
    def bigquery_routines_delete(self, request: operations.BigqueryRoutinesDeleteRequest) -> operations.BigqueryRoutinesDeleteResponse:
        r"""Deletes the routine specified by routineId from the dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/routines/{routineId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryRoutinesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def bigquery_routines_get(self, request: operations.BigqueryRoutinesGetRequest) -> operations.BigqueryRoutinesGetResponse:
        r"""Gets the specified routine resource by routine ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/routines/{routineId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryRoutinesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Routine])
                res.routine = out

        return res

    
    def bigquery_routines_insert(self, request: operations.BigqueryRoutinesInsertRequest) -> operations.BigqueryRoutinesInsertResponse:
        r"""Creates a new routine in the dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/routines", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryRoutinesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Routine])
                res.routine = out

        return res

    
    def bigquery_routines_list(self, request: operations.BigqueryRoutinesListRequest) -> operations.BigqueryRoutinesListResponse:
        r"""Lists all routines in the specified dataset. Requires the READER dataset role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/routines", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryRoutinesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRoutinesResponse])
                res.list_routines_response = out

        return res

    
    def bigquery_routines_update(self, request: operations.BigqueryRoutinesUpdateRequest) -> operations.BigqueryRoutinesUpdateResponse:
        r"""Updates information in an existing routine. The update method replaces the entire Routine resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/routines/{routineId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryRoutinesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Routine])
                res.routine = out

        return res

    