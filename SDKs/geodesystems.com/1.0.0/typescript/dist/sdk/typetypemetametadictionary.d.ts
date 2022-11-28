import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeMetametaDictionary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeMetametaDictionary - Search API for 'Metadata Dictionary' entry type
     *
     * API to search for entries of type Metadata Dictionary
    **/
    searchTypeMetametaDictionary(req: operations.SearchTypeMetametaDictionaryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMetametaDictionaryResponse>;
}
