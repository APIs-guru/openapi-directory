import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AnalyticsDataGet(req: operations.AnalyticsDataGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataGetResponse>;
    AnalyticsManagementAccountsList(req: operations.AnalyticsManagementAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountsListResponse>;
    AnalyticsManagementGoalsList(req: operations.AnalyticsManagementGoalsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsListResponse>;
    AnalyticsManagementProfilesList(req: operations.AnalyticsManagementProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesListResponse>;
    AnalyticsManagementSegmentsList(req: operations.AnalyticsManagementSegmentsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementSegmentsListResponse>;
    AnalyticsManagementWebpropertiesList(req: operations.AnalyticsManagementWebpropertiesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesListResponse>;
}
export {};
