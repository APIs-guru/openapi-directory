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
     * companiesAdd - Create company
     *
     * Create company
    **/
    companiesAdd(req: operations.CompaniesAddRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesAddResponse>;
    /**
     * companiesAll - List companies
     *
     * List companies
    **/
    companiesAll(req: operations.CompaniesAllRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesAllResponse>;
    /**
     * companiesDelete - Delete company
     *
     * Delete company
    **/
    companiesDelete(req: operations.CompaniesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesDeleteResponse>;
    /**
     * companiesOne - Get company
     *
     * Get company
    **/
    companiesOne(req: operations.CompaniesOneRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesOneResponse>;
    /**
     * companiesUpdate - Update company
     *
     * Update company
    **/
    companiesUpdate(req: operations.CompaniesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CompaniesUpdateResponse>;
}
