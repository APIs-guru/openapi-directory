import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://androiddeviceprovisioning.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def androiddeviceprovisioning_customers_configurations_create(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/configurations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Configuration])
                res.configuration = out

        return res

    
    def androiddeviceprovisioning_customers_configurations_delete(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_configurations_list(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsListRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/configurations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListConfigurationsResponse])
                res.customer_list_configurations_response = out

        return res

    
    def androiddeviceprovisioning_customers_configurations_patch(self, request: operations.AndroiddeviceprovisioningCustomersConfigurationsPatchRequest) -> operations.AndroiddeviceprovisioningCustomersConfigurationsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersConfigurationsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Configuration])
                res.configuration = out

        return res

    
    def androiddeviceprovisioning_customers_devices_apply_configuration(self, request: operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/devices:applyConfiguration", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_devices_list(self, request: operations.AndroiddeviceprovisioningCustomersDevicesListRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/devices", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListDevicesResponse])
                res.customer_list_devices_response = out

        return res

    
    def androiddeviceprovisioning_customers_devices_remove_configuration(self, request: operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/devices:removeConfiguration", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_devices_unclaim(self, request: operations.AndroiddeviceprovisioningCustomersDevicesUnclaimRequest) -> operations.AndroiddeviceprovisioningCustomersDevicesUnclaimResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/devices:unclaim", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDevicesUnclaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_customers_dpcs_list(self, request: operations.AndroiddeviceprovisioningCustomersDpcsListRequest) -> operations.AndroiddeviceprovisioningCustomersDpcsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/dpcs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersDpcsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListDpcsResponse])
                res.customer_list_dpcs_response = out

        return res

    
    def androiddeviceprovisioning_customers_list(self, request: operations.AndroiddeviceprovisioningCustomersListRequest) -> operations.AndroiddeviceprovisioningCustomersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/customers"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerListCustomersResponse])
                res.customer_list_customers_response = out

        return res

    
    def androiddeviceprovisioning_partners_customers_create(self, request: operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest) -> operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/customers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Company])
                res.company = out

        return res

    
    def androiddeviceprovisioning_partners_customers_list(self, request: operations.AndroiddeviceprovisioningPartnersCustomersListRequest) -> operations.AndroiddeviceprovisioningPartnersCustomersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/customers", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomersResponse])
                res.list_customers_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_claim(self, request: operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:claim", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClaimDeviceResponse])
                res.claim_device_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_claim_async(self, request: operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:claimAsync", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androiddeviceprovisioning_partners_devices_find_by_identifier(self, request: operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:findByIdentifier", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FindDevicesByDeviceIdentifierResponse])
                res.find_devices_by_device_identifier_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_find_by_owner(self, request: operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:findByOwner", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FindDevicesByOwnerResponse])
                res.find_devices_by_owner_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_get(self, request: operations.AndroiddeviceprovisioningPartnersDevicesGetRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def androiddeviceprovisioning_partners_devices_metadata(self, request: operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceMetadata])
                res.device_metadata = out

        return res

    
    def androiddeviceprovisioning_partners_devices_unclaim(self, request: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:unclaim", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_partners_devices_unclaim_async(self, request: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:unclaimAsync", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androiddeviceprovisioning_partners_devices_update_metadata_async(self, request: operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:updateMetadataAsync", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androiddeviceprovisioning_partners_vendors_customers_list(self, request: operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest) -> operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/customers", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVendorCustomersResponse])
                res.list_vendor_customers_response = out

        return res

    
    def androiddeviceprovisioning_partners_vendors_list(self, request: operations.AndroiddeviceprovisioningPartnersVendorsListRequest) -> operations.AndroiddeviceprovisioningPartnersVendorsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/vendors", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersVendorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVendorsResponse])
                res.list_vendors_response = out

        return res

    