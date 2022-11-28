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
     * baremetalsolutionProjectsLocationsSubmitProvisioningConfig - Submit a provisiong configuration for a given project.
    **/
    baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req: operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse>;
    /**
     * baremetalsolutionProjectsProvisioningQuotasList - List the budget details to provision resources on a given project.
    **/
    baremetalsolutionProjectsProvisioningQuotasList(req: operations.BaremetalsolutionProjectsProvisioningQuotasListRequest, config?: AxiosRequestConfig): Promise<operations.BaremetalsolutionProjectsProvisioningQuotasListResponse>;
}
