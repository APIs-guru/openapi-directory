import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/enibandhanjh/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * rdcer - Copy of Registered Deed
     *
     * API to verify Copy of Registered Deed.
    **/
    rdcer(req: operations.RdcerRequest, config?: AxiosRequestConfig): Promise<operations.RdcerResponse>;
    /**
     * regrii - ROR Register 2
     *
     * API to verify ROR Register 2.
    **/
    regrii(req: operations.RegriiRequest, config?: AxiosRequestConfig): Promise<operations.RegriiResponse>;
    /**
     * rmcer - Marriage Certificate
     *
     * API to verify Marriage Certificate.
    **/
    rmcer(req: operations.RmcerRequest, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
}
export {};
