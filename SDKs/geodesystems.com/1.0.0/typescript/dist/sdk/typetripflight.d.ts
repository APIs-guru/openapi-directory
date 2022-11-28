import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTripFlight {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTripFlight - Search API for 'Flight Leg' entry type
     *
     * API to search for entries of type Flight Leg
    **/
    searchTripFlight(req: operations.SearchTripFlightRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripFlightResponse>;
}
