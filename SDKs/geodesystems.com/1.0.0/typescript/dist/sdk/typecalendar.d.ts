import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeCalendar {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchCalendar - Search API for 'Calendar' entry type
     *
     * API to search for entries of type Calendar
    **/
    searchCalendar(req: operations.SearchCalendarRequest, config?: AxiosRequestConfig): Promise<operations.SearchCalendarResponse>;
}
