import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointNoaaFlaskEvent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointNoaaFlaskEvent - Search API for 'NOAA Flask Event Measurements' entry type
     *
     * API to search for entries of type NOAA Flask Event Measurements
    **/
    searchTypePointNoaaFlaskEvent(req: operations.SearchTypePointNoaaFlaskEventRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaFlaskEventResponse>;
}
