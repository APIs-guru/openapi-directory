import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGadgetsCountdown {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGadgetsCountdown - Search API for 'Countdown' entry type
     *
     * API to search for entries of type Countdown
    **/
    searchGadgetsCountdown(req: operations.SearchGadgetsCountdownRequest, config?: AxiosRequestConfig): Promise<operations.SearchGadgetsCountdownResponse>;
}
