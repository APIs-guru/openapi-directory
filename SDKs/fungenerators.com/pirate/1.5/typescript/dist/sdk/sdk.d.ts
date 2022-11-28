import { AxiosInstance } from "axios";
import { Generation } from "./generation";
import { Translation } from "./translation";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.fungenerators.com", "https://api.fungenerators.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    generation: Generation;
    translation: Translation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
