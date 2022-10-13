import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://bigquerydatatransfer.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def bigquerydatatransfer_projects_locations_data_sources_check_valid_creds(self, request: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest) -> operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:checkValidCreds", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckValidCredsResponse])
                res.check_valid_creds_response = out

        return res

    
    
    def bigquerydatatransfer_projects_locations_data_sources_list(self, request: operations.BigquerydatatransferProjectsLocationsDataSourcesListRequest) -> operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/dataSources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDataSourcesResponse])
                res.list_data_sources_response = out

        return res

    
    
    def bigquerydatatransfer_projects_locations_enroll_data_sources(self, request: operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest) -> operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:enrollDataSources", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def bigquerydatatransfer_projects_locations_list(self, request: operations.BigquerydatatransferProjectsLocationsListRequest) -> operations.BigquerydatatransferProjectsLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_create(self, request: operations.BigquerydatatransferProjectsTransferConfigsCreateRequest) -> operations.BigquerydatatransferProjectsTransferConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/transferConfigs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferConfig])
                res.transfer_config = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_list(self, request: operations.BigquerydatatransferProjectsTransferConfigsListRequest) -> operations.BigquerydatatransferProjectsTransferConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/transferConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferConfigsResponse])
                res.list_transfer_configs_response = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_patch(self, request: operations.BigquerydatatransferProjectsTransferConfigsPatchRequest) -> operations.BigquerydatatransferProjectsTransferConfigsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferConfig])
                res.transfer_config = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_runs_delete(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_runs_get(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsGetRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TransferRun])
                res.transfer_run = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_runs_list(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsListRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/runs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferRunsResponse])
                res.list_transfer_runs_response = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_runs_transfer_logs_list(self, request: operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest) -> operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/transferLogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTransferLogsResponse])
                res.list_transfer_logs_response = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_schedule_runs(self, request: operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest) -> operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}:scheduleRuns", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleTransferRunsResponse])
                res.schedule_transfer_runs_response = out

        return res

    
    
    def bigquerydatatransfer_projects_transfer_configs_start_manual_runs(self, request: operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest) -> operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}:startManualRuns", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartManualTransferRunsResponse])
                res.start_manual_transfer_runs_response = out

        return res

    