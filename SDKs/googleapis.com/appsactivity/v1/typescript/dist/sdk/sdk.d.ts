import { AxiosInstance } from "axios";
import { Activities } from "./activities";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/appsactivity/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    activities: Activities;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
