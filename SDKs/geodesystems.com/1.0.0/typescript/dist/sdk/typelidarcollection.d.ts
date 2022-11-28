import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeLidarCollection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchLidarCollection - Search API for 'LiDAR Collection' entry type
     *
     * API to search for entries of type LiDAR Collection
    **/
    searchLidarCollection(req: operations.SearchLidarCollectionRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarCollectionResponse>;
}
