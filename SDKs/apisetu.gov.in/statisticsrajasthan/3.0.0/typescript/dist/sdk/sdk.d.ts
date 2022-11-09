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
     * API to verify Birth Certificate.
    **/
    Btcer(req: operations.BtcerRequest, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * API to verify Death Certificate.
    **/
    Dtcer(req: operations.DtcerRequest, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * API to verify Marriage Certificate.
    **/
    Rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
}
export {};
