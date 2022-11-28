import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeImageAirport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeImageAirport - Search API for 'Airport Image' entry type
     *
     * API to search for entries of type Airport Image
    **/
    searchTypeImageAirport(req: operations.SearchTypeImageAirportRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeImageAirportResponse>;
}
