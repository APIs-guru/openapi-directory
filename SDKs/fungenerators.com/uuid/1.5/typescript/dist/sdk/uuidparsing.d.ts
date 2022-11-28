import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UuidParsing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postUuid - Parse a UUID string and return its version and check whether it is valid.
    **/
    postUuid(req: operations.PostUuidRequest, config?: AxiosRequestConfig): Promise<operations.PostUuidResponse>;
}
