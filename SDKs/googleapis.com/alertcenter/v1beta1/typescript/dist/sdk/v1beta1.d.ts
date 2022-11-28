import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1beta1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * alertcenterGetSettings - Returns customer-level settings.
    **/
    alertcenterGetSettings(req: operations.AlertcenterGetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterGetSettingsResponse>;
    /**
     * alertcenterUpdateSettings - Updates the customer-level settings.
    **/
    alertcenterUpdateSettings(req: operations.AlertcenterUpdateSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterUpdateSettingsResponse>;
}
