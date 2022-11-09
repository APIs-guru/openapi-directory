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
     * API to verify Copy of Registered Deed.
    **/
    Rdcer(req: operations.RdcerRequest, config?: AxiosRequestConfig): Promise<operations.RdcerResponse>;
    /**
     * API to verify Records of Rights.
    **/
    Ror1b(req: operations.Ror1bRequest, config?: AxiosRequestConfig): Promise<operations.Ror1bResponse>;
}
export {};
