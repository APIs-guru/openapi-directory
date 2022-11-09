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
     * API to verify Allotment Letter.
    **/
    Alltr(req: operations.AlltrRequest, config?: AxiosRequestConfig): Promise<operations.AlltrResponse>;
    /**
     * API to verify NOC For Banks.
    **/
    Bknoc(req: operations.BknocRequest, config?: AxiosRequestConfig): Promise<operations.BknocResponse>;
    /**
     * API to verify Building Plan.
    **/
    Bpcer(req: operations.BpcerRequest, config?: AxiosRequestConfig): Promise<operations.BpcerResponse>;
    /**
     * API to verify Confirmatory Letter.
    **/
    Cfltr(req: operations.CfltrRequest, config?: AxiosRequestConfig): Promise<operations.CfltrResponse>;
    /**
     * API to verify Lease cum Sale Agreement.
    **/
    Lcsag(req: operations.LcsagRequest, config?: AxiosRequestConfig): Promise<operations.LcsagResponse>;
    /**
     * API to verify Possession Certificate.
    **/
    Pscer(req: operations.PscerRequest, config?: AxiosRequestConfig): Promise<operations.PscerResponse>;
    /**
     * API to verify NOC for New Power Supply.
    **/
    Psnoc(req: operations.PsnocRequest, config?: AxiosRequestConfig): Promise<operations.PsnocResponse>;
    /**
     * API to verify Water Bill/ Connection.
    **/
    Wtrbl(req: operations.WtrblRequest, config?: AxiosRequestConfig): Promise<operations.WtrblResponse>;
}
export {};
