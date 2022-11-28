import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/landrecordskar/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cncer - Conversion Certificate
     *
     * API to verify Conversion Certificate.
    **/
    cncer(req: operations.CncerRequest, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
    /**
     * mutan - Mutation Report/ePattadar Passbook
     *
     * API to verify Mutation Report/ePattadar Passbook.
    **/
    mutan(req: operations.MutanRequest, config?: AxiosRequestConfig): Promise<operations.MutanResponse>;
}
export {};
