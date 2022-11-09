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
     * API to verify Class XII Marksheet.
    **/
    Hscer(req: operations.HscerRequest, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * API to verify Class XII Migration Certificate.
    **/
    Hsmgr(req: operations.HsmgrRequest, config?: AxiosRequestConfig): Promise<operations.HsmgrResponse>;
    /**
     * API to verify Class XII Provisional Certificate.
    **/
    Hvcer(req: operations.HvcerRequest, config?: AxiosRequestConfig): Promise<operations.HvcerResponse>;
    /**
     * API to verify Class X Marksheet.
    **/
    Sscer(req: operations.SscerRequest, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
    /**
     * API to verify Class X Migration Certificate.
    **/
    Ssmgr(req: operations.SsmgrRequest, config?: AxiosRequestConfig): Promise<operations.SsmgrResponse>;
    /**
     * API to verify Class X Provisional Certificate.
    **/
    Svcer(req: operations.SvcerRequest, config?: AxiosRequestConfig): Promise<operations.SvcerResponse>;
}
export {};
