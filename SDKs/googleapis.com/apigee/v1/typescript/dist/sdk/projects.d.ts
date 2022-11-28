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
     * apigeeProjectsProvisionOrganization - Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.
    **/
    apigeeProjectsProvisionOrganization(req: operations.ApigeeProjectsProvisionOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeProjectsProvisionOrganizationResponse>;
}
