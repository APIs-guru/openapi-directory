import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDocumentPdf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDocumentPdf - Search API for 'PDF File' entry type
     *
     * API to search for entries of type PDF File
    **/
    searchTypeDocumentPdf(req: operations.SearchTypeDocumentPdfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentPdfResponse>;
}
