import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.exchangerate-api.com/v4"];
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
     * getLatestBaseCurrency - Returns latest exchange rates in parameter-supplied base currency.
    **/
    getLatestBaseCurrency(req: operations.GetLatestBaseCurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestBaseCurrencyResponse>;
}
export {};
