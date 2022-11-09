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
    DeleteHumanLoop(req: operations.DeleteHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHumanLoopResponse>;
    DescribeHumanLoop(req: operations.DescribeHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHumanLoopResponse>;
    ListHumanLoops(req: operations.ListHumanLoopsRequest, config?: AxiosRequestConfig): Promise<operations.ListHumanLoopsResponse>;
    StartHumanLoop(req: operations.StartHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.StartHumanLoopResponse>;
    StopHumanLoop(req: operations.StopHumanLoopRequest, config?: AxiosRequestConfig): Promise<operations.StopHumanLoopResponse>;
}
export {};
