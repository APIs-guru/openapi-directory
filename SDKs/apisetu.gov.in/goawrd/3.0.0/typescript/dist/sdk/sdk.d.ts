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
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
    **/
    Ercer(req: operations.ErcerRequest, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * API to verify Permission/ Certificate for Well.
    **/
    Pfdaw(req: operations.PfdawRequest, config?: AxiosRequestConfig): Promise<operations.PfdawResponse>;
    /**
     * API to verify Permission/ Certificate for Transportation (Petroleum Products, Water etc.).
    **/
    Tpcer(req: operations.TpcerRequest, config?: AxiosRequestConfig): Promise<operations.TpcerResponse>;
}
export {};
