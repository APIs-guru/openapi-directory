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
    AlertcenterAlertsBatchDelete(req: operations.AlertcenterAlertsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsBatchDeleteResponse>;
    AlertcenterAlertsBatchUndelete(req: operations.AlertcenterAlertsBatchUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsBatchUndeleteResponse>;
    AlertcenterAlertsDelete(req: operations.AlertcenterAlertsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsDeleteResponse>;
    AlertcenterAlertsFeedbackCreate(req: operations.AlertcenterAlertsFeedbackCreateRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsFeedbackCreateResponse>;
    AlertcenterAlertsFeedbackList(req: operations.AlertcenterAlertsFeedbackListRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsFeedbackListResponse>;
    AlertcenterAlertsGet(req: operations.AlertcenterAlertsGetRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsGetResponse>;
    AlertcenterAlertsGetMetadata(req: operations.AlertcenterAlertsGetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsGetMetadataResponse>;
    AlertcenterAlertsList(req: operations.AlertcenterAlertsListRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsListResponse>;
    AlertcenterAlertsUndelete(req: operations.AlertcenterAlertsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterAlertsUndeleteResponse>;
    AlertcenterGetSettings(req: operations.AlertcenterGetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterGetSettingsResponse>;
    AlertcenterUpdateSettings(req: operations.AlertcenterUpdateSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AlertcenterUpdateSettingsResponse>;
}
export {};
