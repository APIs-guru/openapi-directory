import { AxiosInstance } from "axios";
import { Domains } from "./domains";
import { Info } from "./info";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://domainsdb.info/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    domains: Domains;
    info: Info;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
