import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/epramanhp/v3"];
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
     * agcer - Agriculture/ Agriculturist Certificate
     *
     * API to verify Agriculture/ Agriculturist Certificate.
    **/
    agcer(req: operations.AgcerRequest, config?: AxiosRequestConfig): Promise<operations.AgcerResponse>;
    /**
     * bacer - Backward Area Certificate
     *
     * API to verify Backward Area Certificate.
    **/
    bacer(req: operations.BacerRequest, config?: AxiosRequestConfig): Promise<operations.BacerResponse>;
    /**
     * bhcer - Bonafide Certificate
     *
     * API to verify Bonafide Certificate.
    **/
    bhcer(req: operations.BhcerRequest, config?: AxiosRequestConfig): Promise<operations.BhcerResponse>;
    /**
     * chcer - Character Certificate
     *
     * API to verify Character Certificate.
    **/
    chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * dccer - Dogra Class Certificate
     *
     * API to verify Dogra Class Certificate.
    **/
    dccer(req: operations.DccerRequest, config?: AxiosRequestConfig): Promise<operations.DccerResponse>;
    /**
     * ffcer - Freedom Fighter Certificate
     *
     * API to verify Freedom Fighter Certificate.
    **/
    ffcer(req: operations.FfcerRequest, config?: AxiosRequestConfig): Promise<operations.FfcerResponse>;
    /**
     * incer - Income Certificate
     *
     * API to verify Income Certificate.
    **/
    incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * lhcer - Legal Heir Certificate
     *
     * API to verify Legal Heir Certificate.
    **/
    lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * mncer - Minority Certificate
     *
     * API to verify Minority Certificate.
    **/
    mncer(req: operations.MncerRequest, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * obcer - OBC Certificate
     *
     * API to verify OBC Certificate.
    **/
    obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * psprt - Passport/ Passport Verification
     *
     * API to verify Passport/ Passport Verification.
    **/
    psprt(req: operations.PsprtRequest, config?: AxiosRequestConfig): Promise<operations.PsprtResponse>;
    /**
     * racer - Rural Area Certificate
     *
     * API to verify Rural Area Certificate.
    **/
    racer(req: operations.RacerRequest, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * rmcer - Marriage Certificate
     *
     * API to verify Marriage Certificate.
    **/
    rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * shcer - SC/ST  Certificate
     *
     * API to verify SC/ST  Certificate.
    **/
    shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
export {};
