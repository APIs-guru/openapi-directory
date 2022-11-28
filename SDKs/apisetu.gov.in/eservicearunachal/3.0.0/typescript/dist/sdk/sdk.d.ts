import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/eservicearunachal/v3"];
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
     * chcer - Character Certificate
     *
     * API to verify Character Certificate.
    **/
    chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * dmcer - Domicile Certificate
     *
     * API to verify Domicile Certificate.
    **/
    dmcer(req: operations.DmcerRequest, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * dpcer - Dependency Certificate
     *
     * API to verify Dependency Certificate.
    **/
    dpcer(req: operations.DpcerRequest, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * rscer - Residence Certificate
     *
     * API to verify Residence Certificate.
    **/
    rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * shcer - SC/ST  Certificate
     *
     * API to verify SC/ST  Certificate.
    **/
    shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
export {};
