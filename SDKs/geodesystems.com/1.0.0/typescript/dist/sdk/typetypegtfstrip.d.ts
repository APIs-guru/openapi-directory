import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeGtfsTrip {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeGtfsTrip - Search API for 'Transit Trip' entry type
     *
     * API to search for entries of type Transit Trip
    **/
    searchTypeGtfsTrip(req: operations.SearchTypeGtfsTripRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsTripResponse>;
}
