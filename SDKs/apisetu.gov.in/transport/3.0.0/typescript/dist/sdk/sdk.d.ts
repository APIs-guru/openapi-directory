import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/transport/v3"];
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
     * fitcer - Fitness Certificate
     *
     * API to verify Fitness Certificate.
    **/
    fitcer(req: operations.FitcerRequest, config?: AxiosRequestConfig): Promise<operations.FitcerResponse>;
    /**
     * rvcer - Registration of Vehicles
     *
     * API to verify Registration of Vehicles.
    **/
    rvcer(req: operations.RvcerRequest, config?: AxiosRequestConfig): Promise<operations.RvcerResponse>;
    /**
     * vhinsc - Vehicle Insurance Certificate
     *
     * API to verify Vehicle Insurance Certificate.
    **/
    vhinsc(req: operations.VhinscRequest, config?: AxiosRequestConfig): Promise<operations.VhinscResponse>;
    /**
     * vhtax - Vehicle Tax Receipt
     *
     * API to verify Vehicle Tax Receipt.
    **/
    vhtax(req: operations.VhtaxRequest, config?: AxiosRequestConfig): Promise<operations.VhtaxResponse>;
}
export {};
