import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTripHotel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTripHotel - Search API for 'Lodging' entry type
     *
     * API to search for entries of type Lodging
    **/
    searchTripHotel(req: operations.SearchTripHotelRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripHotelResponse>;
}
