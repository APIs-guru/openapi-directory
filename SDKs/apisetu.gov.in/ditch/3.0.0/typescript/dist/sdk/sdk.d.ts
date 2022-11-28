import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/ditch/v3"];
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
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * rmcer - Marriage Certificate
     *
     * API to verify Marriage Certificate.
    **/
    rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * rscer - Residence Certificate
     *
     * API to verify Residence Certificate.
    **/
    rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * sicrd - Senior Citizen Identity Card/ Certificate
     *
     * API to verify Senior Citizen Identity Card/ Certificate.
    **/
    sicrd(req: operations.SicrdRequest, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
}
export {};
