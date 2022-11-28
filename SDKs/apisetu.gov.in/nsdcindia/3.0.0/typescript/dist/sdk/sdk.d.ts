import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/nsdcindia/v3"];
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
     * escer - Executive Skill Enhancement Certificate
     *
     * API to verify Executive Skill Enhancement Certificate.
    **/
    escer(req: operations.EscerRequest, config?: AxiosRequestConfig): Promise<operations.EscerResponse>;
    /**
     * skcer - Skill Certificate
     *
     * API to verify Skill Certificate.
    **/
    skcer(req: operations.SkcerRequest, config?: AxiosRequestConfig): Promise<operations.SkcerResponse>;
}
export {};
