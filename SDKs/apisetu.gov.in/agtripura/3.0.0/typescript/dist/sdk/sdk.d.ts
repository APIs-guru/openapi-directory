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
     * API to verify Pension Certificate.
    **/
    Pecer(req: operations.PecerRequest, config?: AxiosRequestConfig): Promise<operations.PecerResponse>;
    /**
     * API to verify Provident Fund.
    **/
    Prfnd(req: operations.PrfndRequest, config?: AxiosRequestConfig): Promise<operations.PrfndResponse>;
}
export {};
