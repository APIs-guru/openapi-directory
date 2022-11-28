import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTripEvent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTripEvent - Search API for 'Event' entry type
     *
     * API to search for entries of type Event
    **/
    searchTripEvent(req: operations.SearchTripEventRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripEventResponse>;
}
