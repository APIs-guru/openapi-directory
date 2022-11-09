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
     * API to verify Company Related Certificate.
    **/
    Cocer(req: operations.CocerRequest, config?: AxiosRequestConfig): Promise<operations.CocerResponse>;
    /**
     * API to verify Registration Certificate of Firm/ Company.
    **/
    Rfcer(req: operations.RfcerRequest, config?: AxiosRequestConfig): Promise<operations.RfcerResponse>;
}
export {};
