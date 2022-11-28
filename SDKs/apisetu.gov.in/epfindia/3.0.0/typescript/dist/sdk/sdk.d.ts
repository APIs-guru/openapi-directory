import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/epfindia/v3"];
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
     * epfsc - Scheme Certificate
     *
     * API to verify Scheme Certificate.
    **/
    epfsc(req: operations.EpfscRequest, config?: AxiosRequestConfig): Promise<operations.EpfscResponse>;
    /**
     * pecer - Pension Certificate
     *
     * API to verify Pension Certificate.
    **/
    pecer(req: operations.PecerRequest, config?: AxiosRequestConfig): Promise<operations.PecerResponse>;
    /**
     * uncrd - UAN Card
     *
     * API to verify UAN Card.
    **/
    uncrd(req: operations.UncrdRequest, config?: AxiosRequestConfig): Promise<operations.UncrdResponse>;
}
export {};
