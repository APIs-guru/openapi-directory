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
     * API to verify Class VIII Marksheet.
    **/
    Cemst(req: operations.CemstRequest, config?: AxiosRequestConfig): Promise<operations.CemstResponse>;
    /**
     * API to verify Class V Marksheet.
    **/
    Cfmst(req: operations.CfmstRequest, config?: AxiosRequestConfig): Promise<operations.CfmstResponse>;
    /**
     * API to verify Class XII Marksheet.
    **/
    Hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * API to verify Migration Certificate.
    **/
    Micer(req: operations.MicerRequest, config?: AxiosRequestConfig): Promise<operations.MicerResponse>;
    /**
     * API to verify Class X Marksheet.
    **/
    Sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
}
export {};
