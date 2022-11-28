import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeMbCollection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeMbCollection - Search API for 'Bathymetry Collection' entry type
     *
     * API to search for entries of type Bathymetry Collection
    **/
    searchTypeMbCollection(req: operations.SearchTypeMbCollectionRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbCollectionResponse>;
}
