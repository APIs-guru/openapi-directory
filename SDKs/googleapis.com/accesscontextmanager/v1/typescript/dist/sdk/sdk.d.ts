import { AxiosInstance } from "axios";
import { AccessPolicies } from "./accesspolicies";
import { Operations } from "./operations";
import { Organizations } from "./organizations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://accesscontextmanager.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    accessPolicies: AccessPolicies;
    operations: Operations;
    organizations: Organizations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
