import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Execute } from "./execute";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://unify.apideck.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    execute: Execute;
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
