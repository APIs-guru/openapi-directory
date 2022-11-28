import { AxiosInstance } from "axios";
import { Incidents } from "./incidents";
import { Locations } from "./locations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://bikewise.org/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    incidents: Incidents;
    locations: Locations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
