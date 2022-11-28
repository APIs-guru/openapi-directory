import { AxiosInstance } from "axios";
import { Balance } from "./balance";
import { Lookup } from "./lookup";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.bintable.com/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    balance: Balance;
    lookup: Lookup;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
