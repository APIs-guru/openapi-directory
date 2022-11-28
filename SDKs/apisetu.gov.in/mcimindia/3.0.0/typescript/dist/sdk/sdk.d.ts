import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/mcimindia/v3"];
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
     * govid - ID Card
     *
     * API to verify ID Card.
    **/
    govid(req: operations.GovidRequest, config?: AxiosRequestConfig): Promise<operations.GovidResponse>;
    /**
     * phcer - Pharmacist Registration Certificate
     *
     * API to verify Pharmacist Registration Certificate.
    **/
    phcer(req: operations.PhcerRequest, config?: AxiosRequestConfig): Promise<operations.PhcerResponse>;
}
export {};
