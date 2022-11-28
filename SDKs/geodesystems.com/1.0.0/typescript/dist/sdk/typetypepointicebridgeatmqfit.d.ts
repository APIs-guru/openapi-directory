import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointIcebridgeAtmQfit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointIcebridgeAtmQfit - Search API for 'ATM QFIT Data' entry type
     *
     * API to search for entries of type ATM QFIT Data
    **/
    searchTypePointIcebridgeAtmQfit(req: operations.SearchTypePointIcebridgeAtmQfitRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeAtmQfitResponse>;
}
