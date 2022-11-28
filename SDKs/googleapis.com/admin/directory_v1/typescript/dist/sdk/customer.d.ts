import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adminCustomerDevicesChromeosCommandsGet - Gets command data a specific command issued to the device.
    **/
    adminCustomerDevicesChromeosCommandsGet(req: operations.AdminCustomerDevicesChromeosCommandsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomerDevicesChromeosCommandsGetResponse>;
    /**
     * adminCustomerDevicesChromeosIssueCommand - Issues a command for the device to execute.
    **/
    adminCustomerDevicesChromeosIssueCommand(req: operations.AdminCustomerDevicesChromeosIssueCommandRequest, config?: AxiosRequestConfig): Promise<operations.AdminCustomerDevicesChromeosIssueCommandResponse>;
}
