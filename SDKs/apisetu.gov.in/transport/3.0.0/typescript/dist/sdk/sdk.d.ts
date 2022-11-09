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
     * API to verify Driving License.
    **/
    Drvlc(req: operations.DrvlcRequest, config?: AxiosRequestConfig): Promise<operations.DrvlcResponse>;
    /**
     * API to verify Fitness Certificate.
    **/
    Fitcer(req: operations.FitcerRequest, config?: AxiosRequestConfig): Promise<operations.FitcerResponse>;
    /**
     * API to verify Registration of Vehicles.
    **/
    Rvcer(req: operations.RvcerRequest, config?: AxiosRequestConfig): Promise<operations.RvcerResponse>;
    /**
     * API to verify Vehicle Insurance Certificate.
    **/
    Vhinsc(req: operations.VhinscRequest, config?: AxiosRequestConfig): Promise<operations.VhinscResponse>;
    /**
     * API to verify Vehicle Tax Receipt.
    **/
    Vhtax(req: operations.VhtaxRequest, config?: AxiosRequestConfig): Promise<operations.VhtaxResponse>;
}
export {};
