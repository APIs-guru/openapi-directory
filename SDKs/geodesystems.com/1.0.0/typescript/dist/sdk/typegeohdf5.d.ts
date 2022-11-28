import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGeoHdf5 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGeoHdf5 - Search API for 'HDF5 File' entry type
     *
     * API to search for entries of type HDF5 File
    **/
    searchGeoHdf5(req: operations.SearchGeoHdf5Request, config?: AxiosRequestConfig): Promise<operations.SearchGeoHdf5Response>;
}
