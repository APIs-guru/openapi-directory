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
     * Get Account balance and expiry
    **/
    BalanceLookup(req: operations.BalanceLookupRequest, config?: AxiosRequestConfig): Promise<operations.BalanceLookupResponse>;
    /**
     * By passing in the appropriate BIN, you can lookup for
     * card meta data in bintable.com API
     *
    **/
    BinLookup(req: operations.BinLookupRequest, config?: AxiosRequestConfig): Promise<operations.BinLookupResponse>;
}
export {};
