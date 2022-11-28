import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Legal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLegalSearch -
     * Search legal documents by document type, or across all document types using keywords, parameter values and ranges.
     *
    **/
    getLegalSearch(req: operations.GetLegalSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetLegalSearchResponse>;
}
