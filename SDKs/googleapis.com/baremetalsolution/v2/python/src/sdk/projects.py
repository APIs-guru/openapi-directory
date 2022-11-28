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

    
    def baremetalsolution_projects_locations_instance_provisioning_settings_fetch(self, request: operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest) -> operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse:
        r"""Get instance provisioning settings for a given project. This is hidden method used by UI only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{location}/instanceProvisioningSettings:fetch", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchInstanceProvisioningSettingsResponse])
                res.fetch_instance_provisioning_settings_response = out

        return res

    
    def baremetalsolution_projects_locations_instances_create(self, request: operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse:
        r"""Create an Instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_detach_lun(self, request: operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse:
        r"""Detach LUN from Instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{instance}:detachLun", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesDetachLunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_disable_interactive_serial_console(self, request: operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse:
        r"""Disable the interactive serial console feature on an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:disableInteractiveSerialConsole", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_enable_interactive_serial_console(self, request: operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse:
        r"""Enable the interactive serial console feature on an instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:enableInteractiveSerialConsole", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_list(self, request: operations.BaremetalsolutionProjectsLocationsInstancesListRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesListResponse:
        r"""List servers in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstancesResponse])
                res.list_instances_response = out

        return res

    
    def baremetalsolution_projects_locations_instances_reset(self, request: operations.BaremetalsolutionProjectsLocationsInstancesResetRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesResetResponse:
        r"""Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:reset", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_start(self, request: operations.BaremetalsolutionProjectsLocationsInstancesStartRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesStartResponse:
        r"""Starts a server that was shutdown.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:start", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_instances_stop(self, request: operations.BaremetalsolutionProjectsLocationsInstancesStopRequest) -> operations.BaremetalsolutionProjectsLocationsInstancesStopResponse:
        r"""Stop a running server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:stop", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsInstancesStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_list(self, request: operations.BaremetalsolutionProjectsLocationsListRequest) -> operations.BaremetalsolutionProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def baremetalsolution_projects_locations_networks_list(self, request: operations.BaremetalsolutionProjectsLocationsNetworksListRequest) -> operations.BaremetalsolutionProjectsLocationsNetworksListResponse:
        r"""List network in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNetworksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNetworksResponse])
                res.list_networks_response = out

        return res

    
    def baremetalsolution_projects_locations_networks_list_network_usage(self, request: operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest) -> operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse:
        r"""List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{location}/networks:listNetworkUsage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNetworkUsageResponse])
                res.list_network_usage_response = out

        return res

    
    def baremetalsolution_projects_locations_nfs_shares_create(self, request: operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest) -> operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse:
        r"""Create an NFS share.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/nfsShares", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNfsSharesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_nfs_shares_list(self, request: operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest) -> operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse:
        r"""List NFS shares.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/nfsShares", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsNfsSharesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNfsSharesResponse])
                res.list_nfs_shares_response = out

        return res

    
    def baremetalsolution_projects_locations_provisioning_configs_create(self, request: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest) -> operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse:
        r"""Create new ProvisioningConfig.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/provisioningConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvisioningConfig])
                res.provisioning_config = out

        return res

    
    def baremetalsolution_projects_locations_provisioning_configs_submit(self, request: operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest) -> operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse:
        r"""Submit a provisiong configuration for a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/provisioningConfigs:submit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubmitProvisioningConfigResponse])
                res.submit_provisioning_config_response = out

        return res

    
    def baremetalsolution_projects_locations_provisioning_quotas_list(self, request: operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest) -> operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse:
        r"""List the budget details to provision resources on a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/provisioningQuotas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProvisioningQuotasResponse])
                res.list_provisioning_quotas_response = out

        return res

    
    def baremetalsolution_projects_locations_ssh_keys_create(self, request: operations.BaremetalsolutionProjectsLocationsSSHKeysCreateRequest) -> operations.BaremetalsolutionProjectsLocationsSSHKeysCreateResponse:
        r"""Register a public SSH key in the specified project for use with the interactive serial console feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/sshKeys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsSSHKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKey])
                res.ssh_key = out

        return res

    
    def baremetalsolution_projects_locations_ssh_keys_list(self, request: operations.BaremetalsolutionProjectsLocationsSSHKeysListRequest) -> operations.BaremetalsolutionProjectsLocationsSSHKeysListResponse:
        r"""Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/sshKeys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsSSHKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSSHKeysResponse])
                res.list_ssh_keys_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_list(self, request: operations.BaremetalsolutionProjectsLocationsVolumesListRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesListResponse:
        r"""List storage volumes in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/volumes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVolumesResponse])
                res.list_volumes_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_luns_list(self, request: operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse:
        r"""List storage volume luns for given storage volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/luns", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesLunsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLunsResponse])
                res.list_luns_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_patch(self, request: operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse:
        r"""Update details of a single storage volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_volumes_resize(self, request: operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse:
        r"""Emergency Volume resize.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{volume}:resize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def baremetalsolution_projects_locations_volumes_snapshots_create(self, request: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse:
        r"""Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/snapshots", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VolumeSnapshot])
                res.volume_snapshot = out

        return res

    
    def baremetalsolution_projects_locations_volumes_snapshots_delete(self, request: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse:
        r"""Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def baremetalsolution_projects_locations_volumes_snapshots_get(self, request: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse:
        r"""Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VolumeSnapshot])
                res.volume_snapshot = out

        return res

    
    def baremetalsolution_projects_locations_volumes_snapshots_list(self, request: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse:
        r"""Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVolumeSnapshotsResponse])
                res.list_volume_snapshots_response = out

        return res

    
    def baremetalsolution_projects_locations_volumes_snapshots_restore_volume_snapshot(self, request: operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest) -> operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse:
        r"""Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{volumeSnapshot}:restoreVolumeSnapshot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    