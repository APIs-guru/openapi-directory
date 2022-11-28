import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointText {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointText - Search API for 'Record Text File' entry type
     *
     * API to search for entries of type Record Text File
    **/
    searchTypePointText(req: operations.SearchTypePointTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointTextResponse>;
}
