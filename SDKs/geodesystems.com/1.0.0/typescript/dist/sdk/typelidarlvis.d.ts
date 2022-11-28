import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeLidarLvis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchLidarLvis - Search API for 'LVIS Lidar Data' entry type
     *
     * API to search for entries of type LVIS Lidar Data
    **/
    searchLidarLvis(req: operations.SearchLidarLvisRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarLvisResponse>;
}
