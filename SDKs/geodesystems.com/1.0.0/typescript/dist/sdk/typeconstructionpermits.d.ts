import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeConstructionPermits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchConstructionPermits - Search API for 'Construction Permits' entry type
     *
     * API to search for entries of type Construction Permits
    **/
    searchConstructionPermits(req: operations.SearchConstructionPermitsRequest, config?: AxiosRequestConfig): Promise<operations.SearchConstructionPermitsResponse>;
}
