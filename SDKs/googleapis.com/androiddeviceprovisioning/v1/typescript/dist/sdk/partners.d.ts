import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androiddeviceprovisioningPartnersCustomersCreate - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
    **/
    androiddeviceprovisioningPartnersCustomersCreate(req: operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse>;
    /**
     * androiddeviceprovisioningPartnersCustomersList - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
    **/
    androiddeviceprovisioningPartnersCustomersList(req: operations.AndroiddeviceprovisioningPartnersCustomersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersCustomersListResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesClaim - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
    **/
    androiddeviceprovisioningPartnersDevicesClaim(req: operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesClaimAsync - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
    **/
    androiddeviceprovisioningPartnersDevicesClaimAsync(req: operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesFindByIdentifier - Finds devices by hardware identifiers, such as IMEI.
    **/
    androiddeviceprovisioningPartnersDevicesFindByIdentifier(req: operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesFindByOwner - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
    **/
    androiddeviceprovisioningPartnersDevicesFindByOwner(req: operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesGet - Gets a device.
    **/
    androiddeviceprovisioningPartnersDevicesGet(req: operations.AndroiddeviceprovisioningPartnersDevicesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesGetResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesMetadata - Updates reseller metadata associated with the device. Android devices only.
    **/
    androiddeviceprovisioningPartnersDevicesMetadata(req: operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesUnclaim - Unclaims a device from a customer and removes it from zero-touch enrollment.
    **/
    androiddeviceprovisioningPartnersDevicesUnclaim(req: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesUnclaimAsync - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
    **/
    androiddeviceprovisioningPartnersDevicesUnclaimAsync(req: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse>;
    /**
     * androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
    **/
    androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync(req: operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse>;
    /**
     * androiddeviceprovisioningPartnersVendorsCustomersList - Lists the customers of the vendor.
    **/
    androiddeviceprovisioningPartnersVendorsCustomersList(req: operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse>;
    /**
     * androiddeviceprovisioningPartnersVendorsList - Lists the vendors of the partner.
    **/
    androiddeviceprovisioningPartnersVendorsList(req: operations.AndroiddeviceprovisioningPartnersVendorsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningPartnersVendorsListResponse>;
}
