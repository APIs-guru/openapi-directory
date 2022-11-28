import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Customers:
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

    
    def androiddeviceprovisioning_customers_configurations_create(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse:
        r"""Creates a new configuration. Once created, a customer can apply the configuration to devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/configurations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Configuration])
                res.configuration = out

        return res

    
    def androiddeviceprovisioning_customers_configurations_delete(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse:
        r"""Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_configurations_list(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsListRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsListResponse:
        r"""Lists a customer's configurations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/configurations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListConfigurationsResponse])
                res.customer_list_configurations_response = out

        return res

    
    def androiddeviceprovisioning_customers_configurations_patch(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsPatchRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsPatchResponse:
        r"""Updates a configuration's field values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Configuration])
                res.configuration = out

        return res

    
    def androiddeviceprovisioning_customers_devices_apply_configuration(self, request: operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse:
        r"""Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices:applyConfiguration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_devices_list(self, request: operations.AndroiddeviceprovisioningCustomersDevicesListRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesListResponse:
        r"""Lists a customer's devices.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListDevicesResponse])
                res.customer_list_devices_response = out

        return res

    
    def androiddeviceprovisioning_customers_devices_remove_configuration(self, request: operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse:
        r"""Removes a configuration from device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices:removeConfiguration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_devices_unclaim(self, request: operations.AndroiddeviceprovisioningCustomersDevicesUnclaimRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesUnclaimResponse:
        r"""Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/devices:unclaim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesUnclaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_dpcs_list(self, request: operations.AndroiddeviceprovisioningCustomersDpcsListRequest) -> operations.AndroiddeviceprovisioningCustomersDpcsListResponse:
        r"""Lists the DPCs (device policy controllers) that support zero-touch enrollment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dpcs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDpcsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListDpcsResponse])
                res.customer_list_dpcs_response = out

        return res

    
    def androiddeviceprovisioning_customers_list(self, request: operations.AndroiddeviceprovisioningCustomersListRequest) -> operations.AndroiddeviceprovisioningCustomersListResponse:
        r"""Lists the user's customer accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/customers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListCustomersResponse])
                res.customer_list_customers_response = out

        return res

    