import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectGpsRaw {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectGpsRaw - Search API for 'Raw GPS File' entry type
     *
     * API to search for entries of type Raw GPS File
    **/
    searchProjectGpsRaw(req: operations.SearchProjectGpsRawRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsRawResponse>;
}
