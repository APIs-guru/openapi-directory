import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointAmrcFreewave {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointAmrcFreewave - Search API for 'AMRC Freewave  Data' entry type
     *
     * API to search for entries of type AMRC Freewave  Data
    **/
    searchTypePointAmrcFreewave(req: operations.SearchTypePointAmrcFreewaveRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointAmrcFreewaveResponse>;
}
