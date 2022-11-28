import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/mbse/v3"];
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
     * hpcer - Class XII Passing Certificate
     *
     * API to verify Class XII Passing Certificate.
    **/
    hpcer(req: operations.HpcerRequest, config?: AxiosRequestConfig): Promise<operations.HpcerResponse>;
    /**
     * hscer - Class XII Marksheet
     *
     * API to verify Class XII Marksheet.
    **/
    hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * spcer - Class X Passing Certificate
     *
     * API to verify Class X Passing Certificate.
    **/
    spcer(req: operations.SpcerRequest, config?: AxiosRequestConfig): Promise<operations.SpcerResponse>;
    /**
     * sscer - Class X Marksheet
     *
     * API to verify Class X Marksheet.
    **/
    sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
}
export {};
