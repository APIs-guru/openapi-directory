import { AxiosInstance } from "axios";
import { Tables } from "./tables";
import { Workspaces } from "./workspaces";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://area120tables.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    tables: Tables;
    workspaces: Workspaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
