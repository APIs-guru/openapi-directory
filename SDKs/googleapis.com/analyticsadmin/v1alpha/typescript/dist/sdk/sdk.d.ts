import { AxiosInstance } from "axios";
import { AccountSummaries } from "./accountsummaries";
import { Accounts } from "./accounts";
import { Properties } from "./properties";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://analyticsadmin.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accountSummaries: AccountSummaries;
    accounts: Accounts;
    properties: Properties;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
