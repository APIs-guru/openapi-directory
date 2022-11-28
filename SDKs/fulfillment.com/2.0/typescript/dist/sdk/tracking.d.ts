import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tracking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTrack - Tracking
     *
     * Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.
    **/
    getTrack(req: operations.GetTrackRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackResponse>;
}
