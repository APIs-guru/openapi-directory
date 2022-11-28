import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeAwcMetar {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeAwcMetar - Search API for 'AWC Weather Observations' entry type
     *
     * API to search for entries of type AWC Weather Observations
    **/
    searchTypeAwcMetar(req: operations.SearchTypeAwcMetarRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeAwcMetarResponse>;
}
