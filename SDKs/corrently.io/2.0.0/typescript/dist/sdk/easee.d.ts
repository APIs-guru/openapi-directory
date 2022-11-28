import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Easee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * easeeSessions - Returns lastSession info for all easee wallboxes (chargers) given user has access to.
     *
     * Refer to easee.cloud API for details.
     *
    **/
    easeeSessions(req: operations.EaseeSessionsRequest, config?: AxiosRequestConfig): Promise<operations.EaseeSessionsResponse>;
}
