import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeMb {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeMb - Search API for 'MB Bathymetry' entry type
     *
     * API to search for entries of type MB Bathymetry
    **/
    searchTypeMb(req: operations.SearchTypeMbRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbResponse>;
}
