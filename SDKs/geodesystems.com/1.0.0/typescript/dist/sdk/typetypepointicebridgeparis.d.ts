import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointIcebridgeParis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointIcebridgeParis - Search API for 'Paris Data' entry type
     *
     * API to search for entries of type Paris Data
    **/
    searchTypePointIcebridgeParis(req: operations.SearchTypePointIcebridgeParisRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeParisResponse>;
}
