import { AxiosInstance } from "axios";
import { Holidays } from "./holidays";
import { Provinces } from "./provinces";
import { Root } from "./root";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://canada-holidays.ca"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    holidays: Holidays;
    provinces: Provinces;
    root: Root;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
