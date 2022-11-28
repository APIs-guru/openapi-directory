import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointIcebridgeMccordsIrmcr2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointIcebridgeMccordsIrmcr2 - Search API for 'McCords Irmcr2 Data' entry type
     *
     * API to search for entries of type McCords Irmcr2 Data
    **/
    searchTypePointIcebridgeMccordsIrmcr2(req: operations.SearchTypePointIcebridgeMccordsIrmcr2Request, config?: AxiosRequestConfig): Promise<operations.SearchTypePointIcebridgeMccordsIrmcr2Response>;
}
