import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ocpp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ocppSessions - Last Session Info
     *
     * Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
     * Last session Info of managed EV charging stations connected to the correnty ecosystem.
     *
    **/
    ocppSessions(config?: AxiosRequestConfig): Promise<operations.OcppSessionsResponse>;
}
