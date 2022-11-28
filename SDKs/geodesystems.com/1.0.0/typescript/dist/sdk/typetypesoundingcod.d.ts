import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeSoundingCod {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeSoundingCod - Search API for 'COD Sounding' entry type
     *
     * API to search for entries of type COD Sounding
    **/
    searchTypeSoundingCod(req: operations.SearchTypeSoundingCodRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingCodResponse>;
}
