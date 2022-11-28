import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeMediaVideoQuicktime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchMediaVideoQuicktime - Search API for 'Quicktime Video' entry type
     *
     * API to search for entries of type Quicktime Video
    **/
    searchMediaVideoQuicktime(req: operations.SearchMediaVideoQuicktimeRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaVideoQuicktimeResponse>;
}
