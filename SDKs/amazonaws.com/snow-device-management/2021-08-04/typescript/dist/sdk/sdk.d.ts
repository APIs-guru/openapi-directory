import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://snow-device-management.{region}.amazonaws.com", "https://snow-device-management.{region}.amazonaws.com", "http://snow-device-management.{region}.amazonaws.com.cn", "https://snow-device-management.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cancelTask - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
    **/
    cancelTask(req: operations.CancelTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelTaskResponse>;
    /**
     * createTask - Instructs one or more devices to start a task, such as unlocking or rebooting.
    **/
    createTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    /**
     * describeDevice - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
    **/
    describeDevice(req: operations.DescribeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceResponse>;
    /**
     * describeDeviceEc2Instances - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields.
    **/
    describeDeviceEc2Instances(req: operations.DescribeDeviceEc2InstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceEc2InstancesResponse>;
    /**
     * describeExecution - Checks the status of a remote task running on one or more target devices.
    **/
    describeExecution(req: operations.DescribeExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExecutionResponse>;
    /**
     * describeTask - Checks the metadata for a given task on a device.
    **/
    describeTask(req: operations.DescribeTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTaskResponse>;
    /**
     * listDeviceResources - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
    **/
    listDeviceResources(req: operations.ListDeviceResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceResourcesResponse>;
    /**
     * listDevices - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
    **/
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * listExecutions - Returns the status of tasks for one or more target devices.
    **/
    listExecutions(req: operations.ListExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutionsResponse>;
    /**
     * listTagsForResource - Returns a list of tags for a managed device or task.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTasks - Returns a list of tasks that can be filtered by state.
    **/
    listTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    /**
     * tagResource - Adds or replaces tags on a device or task.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a tag from a device or task.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
