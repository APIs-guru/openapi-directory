import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/ktech/v3"];
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
     * cocer - Company Related Certificate
     *
     * API to verify Company Related Certificate.
    **/
    cocer(req: operations.CocerRequest, config?: AxiosRequestConfig): Promise<operations.CocerResponse>;
    /**
     * rfcer - Registration Certificate of Firm/ Company
     *
     * API to verify Registration Certificate of Firm/ Company.
    **/
    rfcer(req: operations.RfcerRequest, config?: AxiosRequestConfig): Promise<operations.RfcerResponse>;
}
export {};
