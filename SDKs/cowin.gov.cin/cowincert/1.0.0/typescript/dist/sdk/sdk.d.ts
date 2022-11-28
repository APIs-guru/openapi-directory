import { AxiosInstance } from "axios";
import { Certificate } from "./certificate";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cowin.gov.cin/cert/external"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    certificate: Certificate;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
