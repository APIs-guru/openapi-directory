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
     * API to verify Insurance Policy - Cyber.
    **/
    Cyipc(req: operations.CyipcRequest, config?: AxiosRequestConfig): Promise<operations.CyipcResponse>;
    /**
     * API to verify Insurance Policy - Health.
    **/
    Hlipc(req: operations.HlipcRequest, config?: AxiosRequestConfig): Promise<operations.HlipcResponse>;
    /**
     * API to verify Insurance Policy - Home.
    **/
    Hmipc(req: operations.HmipcRequest, config?: AxiosRequestConfig): Promise<operations.HmipcResponse>;
    /**
     * API to verify Insurance Policy - Travel.
    **/
    Tripc(req: operations.TripcRequest, config?: AxiosRequestConfig): Promise<operations.TripcResponse>;
    /**
     * API to verify Insurance Policy - Two Wheeler.
    **/
    Twipc(req: operations.TwipcRequest, config?: AxiosRequestConfig): Promise<operations.TwipcResponse>;
}
export {};
