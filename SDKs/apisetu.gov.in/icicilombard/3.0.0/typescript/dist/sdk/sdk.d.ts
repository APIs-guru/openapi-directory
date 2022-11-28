import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/icicilombard/v3"];
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
     * cripc - Insurance Policy - Car
     *
     * API to verify Insurance Policy - Car.
    **/
    cripc(req: operations.CripcRequest, config?: AxiosRequestConfig): Promise<operations.CripcResponse>;
    /**
     * cvipc - Insurance Policy - Commercial Vehicle
     *
     * API to verify Insurance Policy - Commercial Vehicle.
    **/
    cvipc(req: operations.CvipcRequest, config?: AxiosRequestConfig): Promise<operations.CvipcResponse>;
    /**
     * hlipc - Insurance Policy - Health
     *
     * API to verify Insurance Policy - Health.
    **/
    hlipc(req: operations.HlipcRequest, config?: AxiosRequestConfig): Promise<operations.HlipcResponse>;
    /**
     * hmipc - Insurance Policy - Home
     *
     * API to verify Insurance Policy - Home.
    **/
    hmipc(req: operations.HmipcRequest, config?: AxiosRequestConfig): Promise<operations.HmipcResponse>;
    /**
     * miipc - Insurance Policy - Miscellaneous
     *
     * API to verify Insurance Policy - Miscellaneous.
    **/
    miipc(req: operations.MiipcRequest, config?: AxiosRequestConfig): Promise<operations.MiipcResponse>;
    /**
     * tripc - Insurance Policy - Travel
     *
     * API to verify Insurance Policy - Travel.
    **/
    tripc(req: operations.TripcRequest, config?: AxiosRequestConfig): Promise<operations.TripcResponse>;
    /**
     * twipc - Insurance Policy - Two Wheeler
     *
     * API to verify Insurance Policy - Two Wheeler.
    **/
    twipc(req: operations.TwipcRequest, config?: AxiosRequestConfig): Promise<operations.TwipcResponse>;
}
export {};
