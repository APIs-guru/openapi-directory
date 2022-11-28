import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/edistrictup/v3"];
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
     * btcer - Birth Certificate
     *
     * API to verify Birth Certificate.
    **/
    btcer(req: operations.BtcerRequest, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * ctcer - Caste Certificate
     *
     * API to verify Caste Certificate.
    **/
    ctcer(req: operations.CtcerRequest, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * dmcer - Domicile Certificate
     *
     * API to verify Domicile Certificate.
    **/
    dmcer(req: operations.DmcerRequest, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * dpicr - Disabled Person Identity Card/ Certificate
     *
     * API to verify Disabled Person Identity Card/ Certificate.
    **/
    dpicr(req: operations.DpicrRequest, config?: AxiosRequestConfig): Promise<operations.DpicrResponse>;
    /**
     * dtcer - Death Certificate
     *
     * API to verify Death Certificate.
    **/
    dtcer(req: operations.DtcerRequest, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
}
export {};
