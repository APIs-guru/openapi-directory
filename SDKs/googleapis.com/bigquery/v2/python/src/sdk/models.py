import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Models:
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

    
    def bigquery_models_delete(self, request: operations.BigqueryModelsDeleteRequest) -> operations.BigqueryModelsDeleteResponse:
        r"""Deletes the model specified by modelId from the dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/models/{modelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryModelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def bigquery_models_get(self, request: operations.BigqueryModelsGetRequest) -> operations.BigqueryModelsGetResponse:
        r"""Gets the specified model resource by model ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/models/{modelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Model])
                res.model = out

        return res

    
    def bigquery_models_list(self, request: operations.BigqueryModelsListRequest) -> operations.BigqueryModelsListResponse:
        r"""Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/models", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryModelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListModelsResponse])
                res.list_models_response = out

        return res

    
    def bigquery_models_patch(self, request: operations.BigqueryModelsPatchRequest) -> operations.BigqueryModelsPatchResponse:
        r"""Patch specific fields in the specified model.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/datasets/{datasetId}/models/{modelId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigqueryModelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Model])
                res.model = out

        return res

    