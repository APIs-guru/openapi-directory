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
     * API to verify Pharmacist Registration Certificate.
    **/
    Phcer(req: operations.PhcerRequest, config?: AxiosRequestConfig): Promise<operations.PhcerResponse>;
    /**
     * API to verify Pharmacist Renewal certificate.
    **/
    Rpcer(req: operations.RpcerRequest, config?: AxiosRequestConfig): Promise<operations.RpcerResponse>;
}
export {};
