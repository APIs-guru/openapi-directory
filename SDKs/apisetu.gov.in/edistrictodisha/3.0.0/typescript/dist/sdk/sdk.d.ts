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
     * API to verify Caste Certificate.
    **/
    Ctcer(req: operations.CtcerRequest, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * API to verify Economically Weaker Section Certificate.
    **/
    Ewcer(req: operations.EwcerRequest, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
    /**
     * API to verify Legal Heir Certificate.
    **/
    Lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * API to verify OBC Certificate.
    **/
    Obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * API to verify Records of Rights.
    **/
    Ror1b(req: operations.Ror1bRequest, config?: AxiosRequestConfig): Promise<operations.Ror1bResponse>;
    /**
     * API to verify Solvency Certificate.
    **/
    Slcer(req: operations.SlcerRequest, config?: AxiosRequestConfig): Promise<operations.SlcerResponse>;
}
export {};
