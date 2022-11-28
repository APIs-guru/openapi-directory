import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/iocl/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * lpgsv - LPG Subscription Voucher
     *
     * API to verify LPG Subscription Voucher.
    **/
    lpgsv(req: operations.LpgsvRequest, config?: AxiosRequestConfig): Promise<operations.LpgsvResponse>;
    /**
     * lpgtv - Termination Voucher
     *
     * API to verify Termination Voucher.
    **/
    lpgtv(req: operations.LpgtvRequest, config?: AxiosRequestConfig): Promise<operations.LpgtvResponse>;
}
export {};
