import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Management {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsManagementAccountsList - Lists all accounts to which the user has access.
    **/
    analyticsManagementAccountsList(req: operations.AnalyticsManagementAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountsListResponse>;
    /**
     * analyticsManagementGoalsList - Lists goals to which the user has access.
    **/
    analyticsManagementGoalsList(req: operations.AnalyticsManagementGoalsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsListResponse>;
    /**
     * analyticsManagementProfilesList - Lists views (profiles) to which the user has access.
    **/
    analyticsManagementProfilesList(req: operations.AnalyticsManagementProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesListResponse>;
    /**
     * analyticsManagementSegmentsList - Lists advanced segments to which the user has access.
    **/
    analyticsManagementSegmentsList(req: operations.AnalyticsManagementSegmentsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementSegmentsListResponse>;
    /**
     * analyticsManagementWebpropertiesList - Lists web properties to which the user has access.
    **/
    analyticsManagementWebpropertiesList(req: operations.AnalyticsManagementWebpropertiesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesListResponse>;
}
