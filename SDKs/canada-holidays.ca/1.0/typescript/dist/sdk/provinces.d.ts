import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Provinces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiV1Provinces - Get all provinces
     *
     * Returns provinces and territories in Canada. Each province or territory lists its associated holidays.
    **/
    getApiV1Provinces(req: operations.GetApiV1ProvincesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1ProvincesResponse>;
}
