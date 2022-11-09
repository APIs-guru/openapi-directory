import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    DescribeReportCreation(req: operations.DescribeReportCreationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReportCreationResponse>;
    GetComplianceSummary(req: operations.GetComplianceSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceSummaryResponse>;
    GetResources(req: operations.GetResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesResponse>;
    GetTagKeys(req: operations.GetTagKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTagKeysResponse>;
    GetTagValues(req: operations.GetTagValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetTagValuesResponse>;
    StartReportCreation(req: operations.StartReportCreationRequest, config?: AxiosRequestConfig): Promise<operations.StartReportCreationResponse>;
    TagResources(req: operations.TagResourcesRequest, config?: AxiosRequestConfig): Promise<operations.TagResourcesResponse>;
    UntagResources(req: operations.UntagResourcesRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourcesResponse>;
}
export {};
