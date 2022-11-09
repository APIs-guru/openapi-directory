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
    CancelTask(req: operations.CancelTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelTaskResponse>;
    CreateTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    DescribeDevice(req: operations.DescribeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceResponse>;
    DescribeDeviceEc2Instances(req: operations.DescribeDeviceEc2InstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceEc2InstancesResponse>;
    DescribeExecution(req: operations.DescribeExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExecutionResponse>;
    DescribeTask(req: operations.DescribeTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTaskResponse>;
    ListDeviceResources(req: operations.ListDeviceResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceResourcesResponse>;
    ListDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    ListExecutions(req: operations.ListExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutionsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    ListTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
