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
     * API to verify Enlistment Certificate.
    **/
    Etcer(req: operations.EtcerRequest, config?: AxiosRequestConfig): Promise<operations.EtcerResponse>;
    /**
     * API to verify ID Card.
    **/
    Govid(req: operations.GovidRequest, config?: AxiosRequestConfig): Promise<operations.GovidResponse>;
    /**
     * API to verify Sanction Letter/ Certificate.
    **/
    Sicer(req: operations.SicerRequest, config?: AxiosRequestConfig): Promise<operations.SicerResponse>;
}
export {};
