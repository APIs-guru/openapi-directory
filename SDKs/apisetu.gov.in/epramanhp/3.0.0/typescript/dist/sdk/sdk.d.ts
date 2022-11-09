import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * API to verify Agriculture/ Agriculturist Certificate.
    **/
    Agcer(req: operations.AgcerRequest, config?: AxiosRequestConfig): Promise<operations.AgcerResponse>;
    /**
     * API to verify Backward Area Certificate.
    **/
    Bacer(req: operations.BacerRequest, config?: AxiosRequestConfig): Promise<operations.BacerResponse>;
    /**
     * API to verify Bonafide Certificate.
    **/
    Bhcer(req: operations.BhcerRequest, config?: AxiosRequestConfig): Promise<operations.BhcerResponse>;
    /**
     * API to verify Character Certificate.
    **/
    Chcer(req: operations.ChcerRequest, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * API to verify Dogra Class Certificate.
    **/
    Dccer(req: operations.DccerRequest, config?: AxiosRequestConfig): Promise<operations.DccerResponse>;
    /**
     * API to verify Freedom Fighter Certificate.
    **/
    Ffcer(req: operations.FfcerRequest, config?: AxiosRequestConfig): Promise<operations.FfcerResponse>;
    /**
     * API to verify Income Certificate.
    **/
    Incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * API to verify Legal Heir Certificate.
    **/
    Lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * API to verify Minority Certificate.
    **/
    Mncer(req: operations.MncerRequest, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * API to verify OBC Certificate.
    **/
    Obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * API to verify Passport/ Passport Verification.
    **/
    Psprt(req: operations.PsprtRequest, config?: AxiosRequestConfig): Promise<operations.PsprtResponse>;
    /**
     * API to verify Rural Area Certificate.
    **/
    Racer(req: operations.RacerRequest, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * API to verify Marriage Certificate.
    **/
    Rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * API to verify SC/ST  Certificate.
    **/
    Shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
export {};
