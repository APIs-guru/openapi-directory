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
     * API to verify Class XII Provisional Certificate.
    **/
    Hvcer(req: operations.HvcerRequest, config?: AxiosRequestConfig): Promise<operations.HvcerResponse>;
    /**
     * API to verify Class X Provisional Certificate.
    **/
    Svcer(req: operations.SvcerRequest, config?: AxiosRequestConfig): Promise<operations.SvcerResponse>;
}
export {};
