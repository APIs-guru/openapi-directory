import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.globalwinescore.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getGlobalwinescoresLatest - List all latest GWS
     *
     * Returns the latest GWS available per wine/vintage.
    **/
    getGlobalwinescoresLatest(req: operations.GetGlobalwinescoresLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetGlobalwinescoresLatestResponse>;
    /**
     * listHistoricalGws - List all historical GWS
     *
     * Returns all available GWS
    **/
    listHistoricalGws(req: operations.ListHistoricalGwsRequest, config?: AxiosRequestConfig): Promise<operations.ListHistoricalGwsResponse>;
}
export {};
