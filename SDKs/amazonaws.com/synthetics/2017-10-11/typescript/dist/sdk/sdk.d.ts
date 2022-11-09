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
    CreateCanary(req: operations.CreateCanaryRequest, config?: AxiosRequestConfig): Promise<operations.CreateCanaryResponse>;
    DeleteCanary(req: operations.DeleteCanaryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCanaryResponse>;
    DescribeCanaries(req: operations.DescribeCanariesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCanariesResponse>;
    DescribeCanariesLastRun(req: operations.DescribeCanariesLastRunRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCanariesLastRunResponse>;
    DescribeRuntimeVersions(req: operations.DescribeRuntimeVersionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRuntimeVersionsResponse>;
    GetCanary(req: operations.GetCanaryRequest, config?: AxiosRequestConfig): Promise<operations.GetCanaryResponse>;
    GetCanaryRuns(req: operations.GetCanaryRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetCanaryRunsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    StartCanary(req: operations.StartCanaryRequest, config?: AxiosRequestConfig): Promise<operations.StartCanaryResponse>;
    StopCanary(req: operations.StopCanaryRequest, config?: AxiosRequestConfig): Promise<operations.StopCanaryResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateCanary(req: operations.UpdateCanaryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCanaryResponse>;
}
export {};
