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
     * API to verify Insurance Policy - Life.
    **/
    Licer(req: operations.LicerRequest, config?: AxiosRequestConfig): Promise<operations.LicerResponse>;
    /**
     * API to verify Premium Receipt.
    **/
    Prcpt(req: operations.PrcptRequest, config?: AxiosRequestConfig): Promise<operations.PrcptResponse>;
}
export {};
