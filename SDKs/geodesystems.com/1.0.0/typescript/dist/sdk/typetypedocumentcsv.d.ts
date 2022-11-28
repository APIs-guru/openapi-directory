import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDocumentCsv {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDocumentCsv - Search API for 'CSV File' entry type
     *
     * API to search for entries of type CSV File
    **/
    searchTypeDocumentCsv(req: operations.SearchTypeDocumentCsvRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentCsvResponse>;
}
