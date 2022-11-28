import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CompanyInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * companyInfoOne - Get company info
     *
     * Get company info
    **/
    companyInfoOne(req: operations.CompanyInfoOneRequest, config?: AxiosRequestConfig): Promise<operations.CompanyInfoOneResponse>;
}
