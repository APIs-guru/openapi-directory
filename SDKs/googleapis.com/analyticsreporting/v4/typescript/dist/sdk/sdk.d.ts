import { AxiosInstance } from "axios";
import { Reports } from "./reports";
import { UserActivity } from "./useractivity";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://analyticsreporting.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    reports: Reports;
    userActivity: UserActivity;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
