import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSessions - Delete user session (log out)
     *
     * Delete user session (log out)
    **/
    deleteSessions(config?: AxiosRequestConfig): Promise<operations.DeleteSessionsResponse>;
    /**
     * postSessions - Create user session (log in)
     *
     * Create user session (log in)
    **/
    postSessions(req: operations.PostSessionsRequest, config?: AxiosRequestConfig): Promise<operations.PostSessionsResponse>;
}
