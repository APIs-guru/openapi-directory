import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mobiledevices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryMobiledevicesAction - Takes an action that affects a mobile device. For example, remotely wiping a device.
    **/
    directoryMobiledevicesAction(req: operations.DirectoryMobiledevicesActionRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesActionResponse>;
    /**
     * directoryMobiledevicesDelete - Removes a mobile device.
    **/
    directoryMobiledevicesDelete(req: operations.DirectoryMobiledevicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesDeleteResponse>;
    /**
     * directoryMobiledevicesGet - Retrieves a mobile device's properties.
    **/
    directoryMobiledevicesGet(req: operations.DirectoryMobiledevicesGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesGetResponse>;
    /**
     * directoryMobiledevicesList - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead.
    **/
    directoryMobiledevicesList(req: operations.DirectoryMobiledevicesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMobiledevicesListResponse>;
}
