import { AxiosInstance } from "axios";
import { PrivateRiddles } from "./privateriddles";
import { RandomRiddle } from "./randomriddle";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.fungenerators.com", "http://api.fungenerators.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    privateRiddles: PrivateRiddles;
    randomRiddle: RandomRiddle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
