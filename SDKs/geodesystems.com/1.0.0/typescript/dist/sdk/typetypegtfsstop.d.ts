import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeGtfsStop {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeGtfsStop - Search API for 'Transit Stop' entry type
     *
     * API to search for entries of type Transit Stop
    **/
    searchTypeGtfsStop(req: operations.SearchTypeGtfsStopRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsStopResponse>;
}
