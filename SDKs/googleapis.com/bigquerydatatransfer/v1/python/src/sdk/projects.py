import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def bigquerydatatransfer_projects_locations_data_sources_check_valid_creds(self, request: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest) -> operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse:
        r"""Returns true if valid credentials exist for the given data source and requesting user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:checkValidCreds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckValidCredsResponse])
                res.check_valid_creds_response = out

        return res

    
    def bigquerydatatransfer_projects_locations_data_sources_list(self, request: operations.BigquerydatatransferProjectsLocationsDataSourcesListRequest) -> operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse:
        r"""Lists supported data sources and returns their settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dataSources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDataSourcesResponse])
                res.list_data_sources_response = out

        return res

    
    def bigquerydatatransfer_projects_locations_enroll_data_sources(self, request: operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest) -> operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse:
        r"""Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:enrollDataSources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def bigquerydatatransfer_projects_locations_list(self, request: operations.BigquerydatatransferProjectsLocationsListRequest) -> operations.BigquerydatatransferProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_create(self, request: operations.BigquerydatatransferProjectsTransferConfigsCreateRequest) -> operations.BigquerydatatransferProjectsTransferConfigsCreateResponse:
        r"""Creates a new data transfer configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/transferConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferConfig])
                res.transfer_config = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_list(self, request: operations.BigquerydatatransferProjectsTransferConfigsListRequest) -> operations.BigquerydatatransferProjectsTransferConfigsListResponse:
        r"""Returns information about all transfer configs owned by a project in the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/transferConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferConfigsResponse])
                res.list_transfer_configs_response = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_patch(self, request: operations.BigquerydatatransferProjectsTransferConfigsPatchRequest) -> operations.BigquerydatatransferProjectsTransferConfigsPatchResponse:
        r"""Updates a data transfer configuration. All fields must be set, even if they are not updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferConfig])
                res.transfer_config = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_runs_delete(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse:
        r"""Deletes the specified transfer run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_runs_get(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsGetRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse:
        r"""Returns information about the particular transfer run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferRun])
                res.transfer_run = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_runs_list(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsListRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse:
        r"""Returns information about running and completed transfer runs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/runs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferRunsResponse])
                res.list_transfer_runs_response = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse:
        r"""Returns log messages for the transfer run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/transferLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferLogsResponse])
                res.list_transfer_logs_response = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_schedule_runs(self, request: operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest) -> operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse:
        r"""Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:scheduleRuns", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleTransferRunsResponse])
                res.schedule_transfer_runs_response = out

        return res

    
    def bigquerydatatransfer_projects_transfer_configs_start_manual_runs(self, request: operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest) -> operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse:
        r"""Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:startManualRuns", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartManualTransferRunsResponse])
                res.start_manual_transfer_runs_response = out

        return res

    