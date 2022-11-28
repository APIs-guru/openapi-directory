import { AxiosInstance } from "axios";
import { AppPkgm } from "./apppkgm";
import { AppPkgmNotifications } from "./apppkgmnotifications";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://etsi.local", "https://localhost/app_pkgm/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    appPkgm: AppPkgm;
    appPkgmNotifications: AppPkgmNotifications;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
