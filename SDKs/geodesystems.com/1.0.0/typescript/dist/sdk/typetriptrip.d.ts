import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTripTrip {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTripTrip - Search API for 'Trip' entry type
     *
     * API to search for entries of type Trip
    **/
    searchTripTrip(req: operations.SearchTripTripRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripTripResponse>;
}
