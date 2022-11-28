import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Companies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * companiesAdd - Create Company
     *
     * Create Company
    **/
    companiesAdd(req: operations.CompaniesAddRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesAddResponse>;
    /**
     * companiesAll - List Companies
     *
     * List Companies
    **/
    companiesAll(req: operations.CompaniesAllRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesAllResponse>;
    /**
     * companiesDelete - Delete Company
     *
     * Delete Company
    **/
    companiesDelete(req: operations.CompaniesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesDeleteResponse>;
    /**
     * companiesOne - Get Company
     *
     * Get Company
    **/
    companiesOne(req: operations.CompaniesOneRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesOneResponse>;
    /**
     * companiesUpdate - Update Company
     *
     * Update Company
    **/
    companiesUpdate(req: operations.CompaniesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesUpdateResponse>;
}
