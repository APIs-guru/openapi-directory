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
     * API to verify Executive Skill Enhancement Certificate.
    **/
    Escer(req: operations.EscerRequest, config?: AxiosRequestConfig): Promise<operations.EscerResponse>;
    /**
     * API to verify Skill Certificate.
    **/
    Skcer(req: operations.SkcerRequest, config?: AxiosRequestConfig): Promise<operations.SkcerResponse>;
}
export {};
