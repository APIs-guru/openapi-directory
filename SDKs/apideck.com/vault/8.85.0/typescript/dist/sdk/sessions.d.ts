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
     * sessionsCreate - Create Session
     *
     * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
     * url to allow temporary access to manage their integrations and settings.
     *
     * Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
     *
    **/
    sessionsCreate(req: operations.SessionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SessionsCreateResponse>;
}
