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
     * API to verify Khatha Extract / Certificate.
    **/
    Kecer(req: operations.KecerRequest, config?: AxiosRequestConfig): Promise<operations.KecerResponse>;
    /**
     * API to verify New Tap Connection.
    **/
    Tapcn(req: operations.TapcnRequest, config?: AxiosRequestConfig): Promise<operations.TapcnResponse>;
    /**
     * API to verify Trade License/ Certificate.
    **/
    Tdlcs(req: operations.TdlcsRequest, config?: AxiosRequestConfig): Promise<operations.TdlcsResponse>;
    /**
     * API to verify Jalanidhi - New UGD Connection.
    **/
    Ugdcn(req: operations.UgdcnRequest, config?: AxiosRequestConfig): Promise<operations.UgdcnResponse>;
}
export {};
