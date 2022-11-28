import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/pblabour/v3"];
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
     * alsfc - Application/ License for Factory
     *
     * API to verify Application/ License for Factory.
    **/
    alsfc(req: operations.AlsfcRequest, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * clcer - Registration Certificate for Contract Labour License
     *
     * API to verify Registration Certificate for Contract Labour License.
    **/
    clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * srcer - Registration Certificate of Shops And Commercial Establishment
     *
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
export {};
