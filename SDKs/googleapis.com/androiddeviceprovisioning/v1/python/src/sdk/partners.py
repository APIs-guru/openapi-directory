import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Partners:
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

    
    def androiddeviceprovisioning_partners_customers_create(self, request: operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest) -> operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse:
        r"""Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/customers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Company])
                res.company = out

        return res

    
    def androiddeviceprovisioning_partners_customers_list(self, request: operations.AndroiddeviceprovisioningPartnersCustomersListRequest) -> operations.AndroiddeviceprovisioningPartnersCustomersListResponse:
        r"""Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/customers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomersResponse])
                res.list_customers_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_claim(self, request: operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse:
        r"""Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:claim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClaimDeviceResponse])
                res.claim_device_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_claim_async(self, request: operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse:
        r"""Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:claimAsync", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androiddeviceprovisioning_partners_devices_find_by_identifier(self, request: operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse:
        r"""Finds devices by hardware identifiers, such as IMEI.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:findByIdentifier", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FindDevicesByDeviceIdentifierResponse])
                res.find_devices_by_device_identifier_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_find_by_owner(self, request: operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse:
        r"""Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:findByOwner", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FindDevicesByOwnerResponse])
                res.find_devices_by_owner_response = out

        return res

    
    def androiddeviceprovisioning_partners_devices_get(self, request: operations.AndroiddeviceprovisioningPartnersDevicesGetRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesGetResponse:
        r"""Gets a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def androiddeviceprovisioning_partners_devices_metadata(self, request: operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse:
        r"""Updates reseller metadata associated with the device. Android devices only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceMetadata])
                res.device_metadata = out

        return res

    
    def androiddeviceprovisioning_partners_devices_unclaim(self, request: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse:
        r"""Unclaims a device from a customer and removes it from zero-touch enrollment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:unclaim", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def androiddeviceprovisioning_partners_devices_unclaim_async(self, request: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse:
        r"""Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:unclaimAsync", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androiddeviceprovisioning_partners_devices_update_metadata_async(self, request: operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest) -> operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse:
        r"""Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/partners/{partnerId}/devices:updateMetadataAsync", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def androiddeviceprovisioning_partners_vendors_customers_list(self, request: operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest) -> operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse:
        r"""Lists the customers of the vendor.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/customers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVendorCustomersResponse])
                res.list_vendor_customers_response = out

        return res

    
    def androiddeviceprovisioning_partners_vendors_list(self, request: operations.AndroiddeviceprovisioningPartnersVendorsListRequest) -> operations.AndroiddeviceprovisioningPartnersVendorsListResponse:
        r"""Lists the vendors of the partner.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/vendors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroiddeviceprovisioningPartnersVendorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVendorsResponse])
                res.list_vendors_response = out

        return res

    