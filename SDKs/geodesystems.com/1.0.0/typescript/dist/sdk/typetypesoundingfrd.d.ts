import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeSoundingFrd {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeSoundingFrd - Search API for 'FRD Sounding' entry type
     *
     * API to search for entries of type FRD Sounding
    **/
    searchTypeSoundingFrd(req: operations.SearchTypeSoundingFrdRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingFrdResponse>;
}
