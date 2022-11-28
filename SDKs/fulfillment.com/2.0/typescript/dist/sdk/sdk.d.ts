import { AxiosInstance } from "axios";
import { Auth } from "./auth";
import { Inventory } from "./inventory";
import { Orders } from "./orders";
import { Partners } from "./partners";
import { Returns } from "./returns";
import { Tracking } from "./tracking";
import { Users } from "./users";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.fulfillment.com/v2"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    auth: Auth;
    inventory: Inventory;
    orders: Orders;
    partners: Partners;
    returns: Returns;
    tracking: Tracking;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
