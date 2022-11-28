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
     * assuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove - Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.
    **/
    assuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove(req: operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse>;
}
