import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioSra {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioSra - Search API for 'Sequence Read Archive' entry type
     *
     * API to search for entries of type Sequence Read Archive
    **/
    searchBioSra(req: operations.SearchBioSraRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioSraResponse>;
}
