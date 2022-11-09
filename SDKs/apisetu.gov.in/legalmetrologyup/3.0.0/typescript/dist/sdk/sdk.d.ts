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
     * API to verify Dealer License.
    **/
    Delcs(req: operations.DelcsRequest, config?: AxiosRequestConfig): Promise<operations.DelcsResponse>;
    /**
     * API to verify Manufacturer License.
    **/
    Malcs(req: operations.MalcsRequest, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * API to verify Packers License.
    **/
    Palcs(req: operations.PalcsRequest, config?: AxiosRequestConfig): Promise<operations.PalcsResponse>;
    /**
     * API to verify Repairer License.
    **/
    Relcs(req: operations.RelcsRequest, config?: AxiosRequestConfig): Promise<operations.RelcsResponse>;
}
export {};
