import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://baremetalsolution.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def baremetalsolution_projects_locations_instance_provisioning_settings_fetch(self, request: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest) -> operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{location}/instanceProvisioningSettings:fetch", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchInstanceProvisioningSettingsResponse])
                res.fetch_instance_provisioning_settings_response = out

        return res

    
    def baremetalsolution_projects_locations_instances_create(self, request: operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/instances", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_detach_lun(self, request: operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{instance}:detachLun", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_disable_interactive_serial_console(self, request: operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:disableInteractiveSerialConsole", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_enable_interactive_serial_console(self, request: operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:enableInteractiveSerialConsole", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_list(self, request: operations.BaremetalsolutionProjectsLocationsInstancesListRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/instances", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstancesResponse])
                res.list_instances_response = out

        return res

    
    def baremetalsolution_projects_locations_instances_reset(self, request: operations.BaremetalsolutionProjectsLocationsInstancesResetRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:reset", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_start(self, request: operations.BaremetalsolutionProjectsLocationsInstancesStartRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:start", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_stop(self, request: operations.BaremetalsolutionProjectsLocationsInstancesStopRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:stop", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_list(self, request: operations.BaremetalsolutionProjectsLocationsListRequest) -> operations.BaremetalsolutionProjectsLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}/locations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def baremetalsolution_projects_locations_networks_list(self, request: operations.BaremetalsolutionProjectsLocationsNetworksListRequest) -> operations.BaremetalsolutionProjectsLocationsNetworksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/networks", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNetworksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNetworksResponse])
                res.list_networks_response = out

        return res

    
    def baremetalsolution_projects_locations_networks_list_network_usage(self, request: operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest) -> operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{location}/networks:listNetworkUsage", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNetworkUsageResponse])
                res.list_network_usage_response = out

        return res

    
    def baremetalsolution_projects_locations_nfs_shares_create(self, request: operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest) -> operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/nfsShares", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_nfs_shares_list(self, request: operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest) -> operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/nfsShares", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNfsSharesResponse])
                res.list_nfs_shares_response = out

        return res

    
    def baremetalsolution_projects_locations_provisioning_configs_create(self, request: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest) -> operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/provisioningConfigs", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisioningConfig])
                res.provisioning_config = out

        return res

    
    def baremetalsolution_projects_locations_provisioning_configs_submit(self, request: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest) -> operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/provisioningConfigs:submit", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubmitProvisioningConfigResponse])
                res.submit_provisioning_config_response = out

        return res

    
    def baremetalsolution_projects_locations_provisioning_quotas_list(self, request: operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest) -> operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/provisioningQuotas", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProvisioningQuotasResponse])
                res.list_provisioning_quotas_response = out

        return res

    
    def baremetalsolution_projects_locations_ssh_keys_create(self, request: operations.BaremetalsolutionProjectsLocationsSSHKeysCreateRequest) -> operations.BaremetalsolutionProjectsLocationsSSHKeysCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/sshKeys", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsSSHKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKey])
                res.ssh_key = out

        return res

    
    def baremetalsolution_projects_locations_ssh_keys_delete(self, request: operations.BaremetalsolutionProjectsLocationsSSHKeysDeleteRequest) -> operations.BaremetalsolutionProjectsLocationsSSHKeysDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsSSHKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def baremetalsolution_projects_locations_ssh_keys_list(self, request: operations.BaremetalsolutionProjectsLocationsSSHKeysListRequest) -> operations.BaremetalsolutionProjectsLocationsSSHKeysListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/sshKeys", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsSSHKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSSHKeysResponse])
                res.list_ssh_keys_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_list(self, request: operations.BaremetalsolutionProjectsLocationsVolumesListRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/volumes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVolumesResponse])
                res.list_volumes_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_luns_get(self, request: operations.BaremetalsolutionProjectsLocationsVolumesLunsGetRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesLunsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesLunsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Lun])
                res.lun = out

        return res

    
    def baremetalsolution_projects_locations_volumes_luns_list(self, request: operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/luns", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLunsResponse])
                res.list_luns_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_patch(self, request: operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_volumes_resize(self, request: operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{volume}:resize", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    