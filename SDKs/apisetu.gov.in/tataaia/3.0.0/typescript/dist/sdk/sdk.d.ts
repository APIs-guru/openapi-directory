import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/tataaia/v3"];
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
     * licer - Insurance Policy - Life
     *
     * API to verify Insurance Policy - Life.
    **/
    licer(req: operations.LicerRequest, config?: AxiosRequestConfig): Promise<operations.LicerResponse>;
    /**
     * prcpt - Premium Receipt
     *
     * API to verify Premium Receipt.
    **/
    prcpt(req: operations.PrcptRequest, config?: AxiosRequestConfig): Promise<operations.PrcptResponse>;
}
export {};
