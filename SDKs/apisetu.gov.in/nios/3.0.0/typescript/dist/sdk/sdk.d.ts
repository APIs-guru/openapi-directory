import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/nios/v3"];
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
     * hsmgr - Class XII Migration Certificate
     *
     * API to verify Class XII Migration Certificate.
    **/
    hsmgr(req: operations.HsmgrRequest, config?: AxiosRequestConfig): Promise<operations.HsmgrResponse>;
    /**
     * hvcer - Class XII Provisional Certificate
     *
     * API to verify Class XII Provisional Certificate.
    **/
    hvcer(req: operations.HvcerRequest, config?: AxiosRequestConfig): Promise<operations.HvcerResponse>;
    /**
     * sscer - Class X Marksheet
     *
     * API to verify Class X Marksheet.
    **/
    sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
    /**
     * ssmgr - Class X Migration Certificate
     *
     * API to verify Class X Migration Certificate.
    **/
    ssmgr(req: operations.SsmgrRequest, config?: AxiosRequestConfig): Promise<operations.SsmgrResponse>;
    /**
     * svcer - Class X Provisional Certificate
     *
     * API to verify Class X Provisional Certificate.
    **/
    svcer(req: operations.SvcerRequest, config?: AxiosRequestConfig): Promise<operations.SvcerResponse>;
}
export {};
