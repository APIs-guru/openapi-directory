import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDocumentXls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDocumentXls - Search API for 'Excel File' entry type
     *
     * API to search for entries of type Excel File
    **/
    searchTypeDocumentXls(req: operations.SearchTypeDocumentXlsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentXlsResponse>;
}
