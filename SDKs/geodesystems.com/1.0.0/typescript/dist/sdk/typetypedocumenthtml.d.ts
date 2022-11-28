import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDocumentHtml {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDocumentHtml - Search API for 'HTML File' entry type
     *
     * API to search for entries of type HTML File
    **/
    searchTypeDocumentHtml(req: operations.SearchTypeDocumentHtmlRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentHtmlResponse>;
}
