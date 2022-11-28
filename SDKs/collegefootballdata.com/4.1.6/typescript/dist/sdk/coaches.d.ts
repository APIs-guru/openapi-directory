import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Coaches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCoaches - Coaching records and history
     *
     * Coaching history
    **/
    getCoaches(req: operations.GetCoachesRequest, config?: AxiosRequestConfig): Promise<operations.GetCoachesResponse>;
}
