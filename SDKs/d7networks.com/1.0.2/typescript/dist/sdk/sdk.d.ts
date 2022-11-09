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
    /**
     * Check account balance
    **/
    BalanceGet(config?: AxiosRequestConfig): Promise<operations.BalanceGetResponse>;
    /**
     * Send SMS  to recipients using D7 SMS Gateway
    **/
    SendPost(req: operations.SendPostRequest, config?: AxiosRequestConfig): Promise<operations.SendPostResponse>;
    /**
     * Send Bulk SMS  to multiple recipients using D7 SMS Gateway
    **/
    SendbatchPost(req: operations.SendbatchPostRequest, config?: AxiosRequestConfig): Promise<operations.SendbatchPostResponse>;
}
export {};
