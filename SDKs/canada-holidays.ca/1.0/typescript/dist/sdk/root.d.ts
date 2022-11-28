import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Root {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiV1ProvincesProvinceId - Get a province or territory by abbreviation
     *
     * Returns a Canadian province or territory with its associated holidays.
    **/
    getApiV1ProvincesProvinceId(req: operations.GetApiV1ProvincesProvinceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1ProvincesProvinceIdResponse>;
    /**
     * getApiVi - root
     *
     * Returns a welcome message.
    **/
    getApiVi(config?: AxiosRequestConfig): Promise<operations.GetApiViResponse>;
}
