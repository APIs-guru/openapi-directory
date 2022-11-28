import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/goawrd/v3"];
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
     * ercer - Registration Certificate of Establishment Employing Contract Labour
     *
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
    **/
    ercer(req: operations.ErcerRequest, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * pfdaw - Permission/ Certificate for Well
     *
     * API to verify Permission/ Certificate for Well.
    **/
    pfdaw(req: operations.PfdawRequest, config?: AxiosRequestConfig): Promise<operations.PfdawResponse>;
    /**
     * tpcer - Permission/ Certificate for Transportation (Petroleum Products, Water etc.)
     *
     * API to verify Permission/ Certificate for Transportation (Petroleum Products, Water etc.).
    **/
    tpcer(req: operations.TpcerRequest, config?: AxiosRequestConfig): Promise<operations.TpcerResponse>;
}
export {};
