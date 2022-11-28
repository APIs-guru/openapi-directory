import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Grants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherGrantsCreate - Grant access for a user to the given package.
    **/
    androidpublisherGrantsCreate(req: operations.AndroidpublisherGrantsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherGrantsCreateResponse>;
}
