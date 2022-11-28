import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { ApiCalls } from "./apicalls";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.digitalnz.org"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    apiCalls: ApiCalls;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
