import { AxiosInstance } from "axios";
import { Applications } from "./applications";
import { Transfers } from "./transfers";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://admin.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    applications: Applications;
    transfers: Transfers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
