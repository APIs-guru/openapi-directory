import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appsactivityActivitiesList - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
    **/
    appsactivityActivitiesList(req: operations.AppsactivityActivitiesListRequest, config?: AxiosRequestConfig): Promise<operations.AppsactivityActivitiesListResponse>;
}
