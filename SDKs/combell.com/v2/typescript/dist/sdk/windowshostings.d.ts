import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WindowsHostings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getWindowsHosting - Windows hosting detail
    **/
    getWindowsHosting(req: operations.GetWindowsHostingRequest, config?: AxiosRequestConfig): Promise<operations.GetWindowsHostingResponse>;
    /**
     * getWindowsHostings - Overview of windows hostings
    **/
    getWindowsHostings(req: operations.GetWindowsHostingsRequest, config?: AxiosRequestConfig): Promise<operations.GetWindowsHostingsResponse>;
}
