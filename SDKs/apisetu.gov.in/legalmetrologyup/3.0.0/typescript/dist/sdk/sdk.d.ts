import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/legalmetrologyup/v3"];
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
     * delcs - Dealer License
     *
     * API to verify Dealer License.
    **/
    delcs(req: operations.DelcsRequest, config?: AxiosRequestConfig): Promise<operations.DelcsResponse>;
    /**
     * malcs - Manufacturer License
     *
     * API to verify Manufacturer License.
    **/
    malcs(req: operations.MalcsRequest, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * palcs - Packers License
     *
     * API to verify Packers License.
    **/
    palcs(req: operations.PalcsRequest, config?: AxiosRequestConfig): Promise<operations.PalcsResponse>;
    /**
     * relcs - Repairer License
     *
     * API to verify Repairer License.
    **/
    relcs(req: operations.RelcsRequest, config?: AxiosRequestConfig): Promise<operations.RelcsResponse>;
}
export {};
