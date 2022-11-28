import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchLocations - Search API for 'Locations' entry type
     *
     * API to search for entries of type Locations
    **/
    searchLocations(req: operations.SearchLocationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchLocationsResponse>;
}
