import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/edistrictodisha/v3"];
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
     * ctcer - Caste Certificate
     *
     * API to verify Caste Certificate.
    **/
    ctcer(req: operations.CtcerRequest, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * ewcer - Economically Weaker Section Certificate
     *
     * API to verify Economically Weaker Section Certificate.
    **/
    ewcer(req: operations.EwcerRequest, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
    /**
     * lhcer - Legal Heir Certificate
     *
     * API to verify Legal Heir Certificate.
    **/
    lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * ror1b - Records of Rights
     *
     * API to verify Records of Rights.
    **/
    ror1b(req: operations.Ror1bRequest, config?: AxiosRequestConfig): Promise<operations.Ror1bResponse>;
    /**
     * slcer - Solvency Certificate
     *
     * API to verify Solvency Certificate.
    **/
    slcer(req: operations.SlcerRequest, config?: AxiosRequestConfig): Promise<operations.SlcerResponse>;
}
export {};
