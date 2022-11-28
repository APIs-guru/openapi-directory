import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeMediaImageloop {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchMediaImageloop - Search API for 'Image Loop' entry type
     *
     * API to search for entries of type Image Loop
    **/
    searchMediaImageloop(req: operations.SearchMediaImageloopRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaImageloopResponse>;
}
