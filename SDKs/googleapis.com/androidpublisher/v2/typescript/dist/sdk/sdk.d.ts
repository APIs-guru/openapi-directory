import { AxiosInstance } from "axios";
import { Edits } from "./edits";
import { Inappproducts } from "./inappproducts";
import { Orders } from "./orders";
import { Purchases } from "./purchases";
import { Reviews } from "./reviews";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.googleapis.com/androidpublisher/v2/applications"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    edits: Edits;
    inappproducts: Inappproducts;
    orders: Orders;
    purchases: Purchases;
    reviews: Reviews;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
