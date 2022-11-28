import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Managedconfigurationsfordevice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseManagedconfigurationsfordeviceDelete - Removes a per-device managed configuration for an app for the specified device.
    **/
    androidenterpriseManagedconfigurationsfordeviceDelete(req: operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse>;
    /**
     * androidenterpriseManagedconfigurationsfordeviceGet - Retrieves details of a per-device managed configuration.
    **/
    androidenterpriseManagedconfigurationsfordeviceGet(req: operations.AndroidenterpriseManagedconfigurationsfordeviceGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceGetResponse>;
    /**
     * androidenterpriseManagedconfigurationsfordeviceList - Lists all the per-device managed configurations for the specified device. Only the ID is set.
    **/
    androidenterpriseManagedconfigurationsfordeviceList(req: operations.AndroidenterpriseManagedconfigurationsfordeviceListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceListResponse>;
    /**
     * androidenterpriseManagedconfigurationsfordeviceUpdate - Adds or updates a per-device managed configuration for an app for the specified device.
    **/
    androidenterpriseManagedconfigurationsfordeviceUpdate(req: operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse>;
}
