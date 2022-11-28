import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/mpmsu/v3"];
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
     * micer - Migration Certificate
     *
     * API to verify Migration Certificate.
    **/
    micer(req: operations.MicerRequest, config?: AxiosRequestConfig): Promise<operations.MicerResponse>;
    /**
     * pvcer - Provisional Certificate
     *
     * API to verify Provisional Certificate.
    **/
    pvcer(req: operations.PvcerRequest, config?: AxiosRequestConfig): Promise<operations.PvcerResponse>;
}
export {};
