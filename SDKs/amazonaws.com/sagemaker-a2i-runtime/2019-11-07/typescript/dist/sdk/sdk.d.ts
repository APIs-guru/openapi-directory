import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://a2i-runtime.sagemaker.{region}.amazonaws.com", "https://a2i-runtime.sagemaker.{region}.amazonaws.com", "http://a2i-runtime.sagemaker.{region}.amazonaws.com.cn", "https://a2i-runtime.sagemaker.{region}.amazonaws.com.cn"];
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
     * deleteHumanLoop - <p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>
    **/
    deleteHumanLoop(req: operations.DeleteHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHumanLoopResponse>;
    /**
     * describeHumanLoop - Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error.
    **/
    describeHumanLoop(req: operations.DescribeHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHumanLoopResponse>;
    /**
     * listHumanLoops - Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
    **/
    listHumanLoops(req: operations.ListHumanLoopsRequest, config?: AxiosRequestConfig): Promise<operations.ListHumanLoopsResponse>;
    /**
     * startHumanLoop - Starts a human loop, provided that at least one activation condition is met.
    **/
    startHumanLoop(req: operations.StartHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.StartHumanLoopResponse>;
    /**
     * stopHumanLoop - Stops the specified human loop.
    **/
    stopHumanLoop(req: operations.StopHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.StopHumanLoopResponse>;
}
export {};
