import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://rest-api.d7networks.com/secure"];
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
     * balanceGet - Balance
     *
     * Check account balance
    **/
    balanceGet(config?: AxiosRequestConfig): Promise<operations.BalanceGetResponse>;
    /**
     * sendPost - SendSMS
     *
     * Send SMS  to recipients using D7 SMS Gateway
    **/
    sendPost(req: operations.SendPostRequest, config?: AxiosRequestConfig): Promise<operations.SendPostResponse>;
    /**
     * sendbatchPost - Bulk SMS
     *
     * Send Bulk SMS  to multiple recipients using D7 SMS Gateway
    **/
    sendbatchPost(req: operations.SendbatchPostRequest, config?: AxiosRequestConfig): Promise<operations.SendbatchPostResponse>;
}
export {};
