import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://edge.sagemaker.{region}.amazonaws.com", "https://edge.sagemaker.{region}.amazonaws.com", "http://edge.sagemaker.{region}.amazonaws.com.cn", "https://edge.sagemaker.{region}.amazonaws.com.cn"];
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
     * getDeviceRegistration - Use to check if a device is registered with SageMaker Edge Manager.
    **/
    getDeviceRegistration(req: operations.GetDeviceRegistrationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceRegistrationResponse>;
    /**
     * sendHeartbeat - Use to get the current status of devices registered on SageMaker Edge Manager.
    **/
    sendHeartbeat(req: operations.SendHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.SendHeartbeatResponse>;
}
export {};
