import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeFaq {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchFaq - Search API for 'FAQ' entry type
     *
     * API to search for entries of type FAQ
    **/
    searchFaq(req: operations.SearchFaqRequest, config?: AxiosRequestConfig): Promise<operations.SearchFaqResponse>;
}
