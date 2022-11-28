import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDocumentDoc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDocumentDoc - Search API for 'Word File' entry type
     *
     * API to search for entries of type Word File
    **/
    searchTypeDocumentDoc(req: operations.SearchTypeDocumentDocRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentDocResponse>;
}
