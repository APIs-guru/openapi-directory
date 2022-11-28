import { AxiosInstance } from "axios";
import { Sites } from "./sites";
import { ViolatingSites } from "./violatingsites";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://adexperiencereport.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    sites: Sites;
    violatingSites: ViolatingSites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
