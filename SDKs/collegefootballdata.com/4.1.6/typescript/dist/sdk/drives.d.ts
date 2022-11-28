import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Drives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDrives - Drive data and results
     *
     * Get game drives
    **/
    getDrives(req: operations.GetDrivesRequest, config?: AxiosRequestConfig): Promise<operations.GetDrivesResponse>;
}
