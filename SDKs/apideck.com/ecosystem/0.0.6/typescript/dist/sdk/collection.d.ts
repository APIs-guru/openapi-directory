import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * collectionListingsAll - List collection listings
     *
     * List collection listings
    **/
    collectionListingsAll(req: operations.CollectionListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.CollectionListingsAllResponse>;
    /**
     * collectionsAll - List collections
     *
     * List collections
    **/
    collectionsAll(req: operations.CollectionsAllRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsAllResponse>;
    /**
     * collectionsOne - Get collection
     *
     * Get collection
    **/
    collectionsOne(req: operations.CollectionsOneRequest, config?: AxiosRequestConfig): Promise<operations.CollectionsOneResponse>;
}
