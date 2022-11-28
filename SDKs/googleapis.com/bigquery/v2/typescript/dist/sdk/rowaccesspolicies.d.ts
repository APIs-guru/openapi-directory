import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RowAccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryRowAccessPoliciesList - Lists all row access policies on the specified table.
    **/
    bigqueryRowAccessPoliciesList(req: operations.BigqueryRowAccessPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryRowAccessPoliciesListResponse>;
}
