import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Listing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listingsAll - List listings
     *
     * List listings
    **/
    listingsAll(req: operations.ListingsAllRequest, config?: AxiosRequestConfig): Promise<operations.ListingsAllResponse>;
    /**
     * listingsOne - Get listing
     *
     * Get listing
    **/
    listingsOne(req: operations.ListingsOneRequest, config?: AxiosRequestConfig): Promise<operations.ListingsOneResponse>;
}
