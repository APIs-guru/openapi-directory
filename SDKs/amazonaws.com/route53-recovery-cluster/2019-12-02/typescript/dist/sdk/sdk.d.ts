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
    GetRoutingControlState(req: operations.GetRoutingControlStateRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingControlStateResponse>;
    UpdateRoutingControlState(req: operations.UpdateRoutingControlStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoutingControlStateResponse>;
    UpdateRoutingControlStates(req: operations.UpdateRoutingControlStatesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoutingControlStatesResponse>;
}
export {};
