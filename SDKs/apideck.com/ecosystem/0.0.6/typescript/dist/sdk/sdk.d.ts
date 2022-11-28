import { AxiosInstance } from "axios";
import { Category } from "./category";
import { Collection } from "./collection";
import { Ecosystem } from "./ecosystem";
import { Listing } from "./listing";
import { Product } from "./product";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.apideck.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    category: Category;
    collection: Collection;
    ecosystem: Ecosystem;
    listing: Listing;
    product: Product;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
