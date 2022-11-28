import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ExternalEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getExternalEvents - List External Events
     *
     * List External Events
    **/
    getExternalEvents(req: operations.GetExternalEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetExternalEventsResponse>;
    /**
     * getExternalEventsId - Show External Event
     *
     * Show External Event
    **/
    getExternalEventsId(req: operations.GetExternalEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetExternalEventsIdResponse>;
    /**
     * postExternalEvents - Create External Event
     *
     * Create External Event
    **/
    postExternalEvents(req: operations.PostExternalEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostExternalEventsResponse>;
}
