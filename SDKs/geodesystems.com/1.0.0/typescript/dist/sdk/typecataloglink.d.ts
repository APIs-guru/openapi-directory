import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeCataloglink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchCataloglink - Search API for 'Catalog Link' entry type
     *
     * API to search for entries of type Catalog Link
    **/
    searchCataloglink(req: operations.SearchCataloglinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchCataloglinkResponse>;
}
