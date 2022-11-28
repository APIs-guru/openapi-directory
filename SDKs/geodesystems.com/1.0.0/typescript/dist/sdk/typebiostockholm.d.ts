import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBioStockholm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBioStockholm - Search API for 'Stockholm File' entry type
     *
     * API to search for entries of type Stockholm File
    **/
    searchBioStockholm(req: operations.SearchBioStockholmRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioStockholmResponse>;
}
