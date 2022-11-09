import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * API to verify Insurance Policy - Car.
    **/
    Cripc(req: operations.CripcRequest, config?: AxiosRequestConfig): Promise<operations.CripcResponse>;
    /**
     * API to verify Insurance Policy - Commercial Vehicle.
    **/
    Cvipc(req: operations.CvipcRequest, config?: AxiosRequestConfig): Promise<operations.CvipcResponse>;
    /**
     * API to verify Insurance Policy - Engineering.
    **/
    Egipc(req: operations.EgipcRequest, config?: AxiosRequestConfig): Promise<operations.EgipcResponse>;
    /**
     * API to verify Insurance Policy - Group.
    **/
    Gicer(req: operations.GicerRequest, config?: AxiosRequestConfig): Promise<operations.GicerResponse>;
    /**
     * API to verify Insurance Policy - Health.
    **/
    Hlipc(req: operations.HlipcRequest, config?: AxiosRequestConfig): Promise<operations.HlipcResponse>;
    /**
     * API to verify Insurance Policy - Home.
    **/
    Hmipc(req: operations.HmipcRequest, config?: AxiosRequestConfig): Promise<operations.HmipcResponse>;
    /**
     * API to verify Insurance Policy - Miscellaneous.
    **/
    Miipc(req: operations.MiipcRequest, config?: AxiosRequestConfig): Promise<operations.MiipcResponse>;
    /**
     * API to verify Insurance Policy - Marine.
    **/
    Mripc(req: operations.MripcRequest, config?: AxiosRequestConfig): Promise<operations.MripcResponse>;
    /**
     * API to verify Insurance Policy - Property.
    **/
    Pripc(req: operations.PripcRequest, config?: AxiosRequestConfig): Promise<operations.PripcResponse>;
    /**
     * API to verify Insurance Policy - Two Wheeler.
    **/
    Twipc(req: operations.TwipcRequest, config?: AxiosRequestConfig): Promise<operations.TwipcResponse>;
}
export {};
