import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeLidarLas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchLidarLas - Search API for 'LAS Lidar Data' entry type
     *
     * API to search for entries of type LAS Lidar Data
    **/
    searchLidarLas(req: operations.SearchLidarLasRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarLasResponse>;
}
