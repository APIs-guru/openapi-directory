import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryProjectsGetServiceAccount - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
    **/
    bigqueryProjectsGetServiceAccount(req: operations.BigqueryProjectsGetServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryProjectsGetServiceAccountResponse>;
    /**
     * bigqueryProjectsList - Lists all projects to which you have been granted any project role.
    **/
    bigqueryProjectsList(req: operations.BigqueryProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryProjectsListResponse>;
}
