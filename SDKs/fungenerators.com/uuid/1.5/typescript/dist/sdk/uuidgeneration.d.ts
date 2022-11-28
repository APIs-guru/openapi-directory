import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UuidGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUuid - Generate a random UUID (v4).
    **/
    getUuid(req: operations.GetUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetUuidResponse>;
    /**
     * getUuidVersionVersion - Generate a random UUID (v4).
    **/
    getUuidVersionVersion(req: operations.GetUuidVersionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetUuidVersionVersionResponse>;
}
