import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeHydroColorado {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeHydroColorado - Search API for 'Colorado DNR Stream Gage' entry type
     *
     * API to search for entries of type Colorado DNR Stream Gage
    **/
    searchTypeHydroColorado(req: operations.SearchTypeHydroColoradoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeHydroColoradoResponse>;
}
