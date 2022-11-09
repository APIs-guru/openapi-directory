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
     * API to verify Economically Backward In General Caste Certificate.
    **/
    Egcer(req: operations.EgcerRequest, config?: AxiosRequestConfig): Promise<operations.EgcerResponse>;
    /**
     * API to verify Economically Weaker Section Certificate.
    **/
    Ewcer(req: operations.EwcerRequest, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
    /**
     * API to verify Income Certificate.
    **/
    Incer(req: operations.IncerRequest, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * API to verify Legal Heir Certificate.
    **/
    Lhcer(req: operations.LhcerRequest, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * API to verify OBC Certificate.
    **/
    Obcer(req: operations.ObcerRequest, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * API to verify Residence Certificate.
    **/
    Rscer(req: operations.RscerRequest, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * API to verify SC/ST  Certificate.
    **/
    Shcer(req: operations.ShcerRequest, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
export {};
