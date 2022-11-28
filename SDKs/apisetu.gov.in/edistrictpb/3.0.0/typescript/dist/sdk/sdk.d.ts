import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/edistrictpb/v3"];
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
     * dtcer - Death Certificate
     *
     * API to verify Death Certificate.
    **/
    dtcer(req: operations.DtcerRequest, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * ewcer - Economically Weaker Section Certificate
     *
     * API to verify Economically Weaker Section Certificate.
    **/
    ewcer(req: operations.EwcerRequest, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * racer - Rural Area Certificate
     *
     * API to verify Rural Area Certificate.
    **/
    racer(req: operations.RacerRequest, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
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
