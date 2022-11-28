import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/transportjk/v3"];
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
     * drvlc - Driving License
     *
     * API to verify Driving License.
    **/
    drvlc(req: operations.DrvlcRequest, config?: AxiosRequestConfig): Promise<operations.DrvlcResponse>;
    /**
     * rvcer - Registration of Vehicles
     *
     * API to verify Registration of Vehicles.
    **/
    rvcer(req: operations.RvcerRequest, config?: AxiosRequestConfig): Promise<operations.RvcerResponse>;
}
export {};
