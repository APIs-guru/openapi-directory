import { AxiosInstance } from "axios";
import { UuidGeneration } from "./uuidgeneration";
import { UuidParsing } from "./uuidparsing";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.fungenerators.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    uuidGeneration: UuidGeneration;
    uuidParsing: UuidParsing;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
