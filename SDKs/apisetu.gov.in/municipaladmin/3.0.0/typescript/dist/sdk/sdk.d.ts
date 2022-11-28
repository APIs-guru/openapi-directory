import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/municipaladmin/v3"];
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
     * kecer - Khatha Extract / Certificate
     *
     * API to verify Khatha Extract / Certificate.
    **/
    kecer(req: operations.KecerRequest, config?: AxiosRequestConfig): Promise<operations.KecerResponse>;
    /**
     * tapcn - New Tap Connection
     *
     * API to verify New Tap Connection.
    **/
    tapcn(req: operations.TapcnRequest, config?: AxiosRequestConfig): Promise<operations.TapcnResponse>;
    /**
     * tdlcs - Trade License/ Certificate
     *
     * API to verify Trade License/ Certificate.
    **/
    tdlcs(req: operations.TdlcsRequest, config?: AxiosRequestConfig): Promise<operations.TdlcsResponse>;
    /**
     * ugdcn - Jalanidhi - New UGD Connection
     *
     * API to verify Jalanidhi - New UGD Connection.
    **/
    ugdcn(req: operations.UgdcnRequest, config?: AxiosRequestConfig): Promise<operations.UgdcnResponse>;
}
export {};
