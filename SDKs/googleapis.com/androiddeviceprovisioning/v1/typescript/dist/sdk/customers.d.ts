import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androiddeviceprovisioningCustomersConfigurationsCreate - Creates a new configuration. Once created, a customer can apply the configuration to devices.
    **/
    androiddeviceprovisioningCustomersConfigurationsCreate(req: operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse>;
    /**
     * androiddeviceprovisioningCustomersConfigurationsDelete - Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
    **/
    androiddeviceprovisioningCustomersConfigurationsDelete(req: operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse>;
    /**
     * androiddeviceprovisioningCustomersConfigurationsList - Lists a customer's configurations.
    **/
    androiddeviceprovisioningCustomersConfigurationsList(req: operations.AndroiddeviceprovisioningCustomersConfigurationsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersConfigurationsListResponse>;
    /**
     * androiddeviceprovisioningCustomersConfigurationsPatch - Updates a configuration's field values.
    **/
    androiddeviceprovisioningCustomersConfigurationsPatch(req: operations.AndroiddeviceprovisioningCustomersConfigurationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersConfigurationsPatchResponse>;
    /**
     * androiddeviceprovisioningCustomersDevicesApplyConfiguration - Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
    **/
    androiddeviceprovisioningCustomersDevicesApplyConfiguration(req: operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse>;
    /**
     * androiddeviceprovisioningCustomersDevicesList - Lists a customer's devices.
    **/
    androiddeviceprovisioningCustomersDevicesList(req: operations.AndroiddeviceprovisioningCustomersDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersDevicesListResponse>;
    /**
     * androiddeviceprovisioningCustomersDevicesRemoveConfiguration - Removes a configuration from device.
    **/
    androiddeviceprovisioningCustomersDevicesRemoveConfiguration(req: operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationResponse>;
    /**
     * androiddeviceprovisioningCustomersDevicesUnclaim - Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
    **/
    androiddeviceprovisioningCustomersDevicesUnclaim(req: operations.AndroiddeviceprovisioningCustomersDevicesUnclaimRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersDevicesUnclaimResponse>;
    /**
     * androiddeviceprovisioningCustomersDpcsList - Lists the DPCs (device policy controllers) that support zero-touch enrollment.
    **/
    androiddeviceprovisioningCustomersDpcsList(req: operations.AndroiddeviceprovisioningCustomersDpcsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersDpcsListResponse>;
    /**
     * androiddeviceprovisioningCustomersList - Lists the user's customer accounts.
    **/
    androiddeviceprovisioningCustomersList(req: operations.AndroiddeviceprovisioningCustomersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroiddeviceprovisioningCustomersListResponse>;
}
