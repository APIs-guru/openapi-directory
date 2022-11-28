import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointIcebridgeAtmIcessn {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointIcebridgeAtmIcessn - Search API for 'ATM Ice SSN Data' entry type
     *
     * API to search for entries of type ATM Ice SSN Data
    **/
    searchTypePointIcebridgeAtmIcessn(req: operations.SearchTypePointIcebridgeAtmIcessnRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeAtmIcessnResponse>;
}
