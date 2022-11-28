import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/dgecerttn/v3"];
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
     * hscer - Class XII Marksheet
     *
     * API to verify Class XII Marksheet.
    **/
    hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * sscer - Class X Marksheet
     *
     * API to verify Class X Marksheet.
    **/
    sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
}
export {};
