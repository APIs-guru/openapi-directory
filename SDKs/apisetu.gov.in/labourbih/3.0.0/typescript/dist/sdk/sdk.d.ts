import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apisetu.gov.in/labourbih/v3"];
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
     * alimw - Application for License for Inter State Migrant Workmen
     *
     * API to verify Application for License for Inter State Migrant Workmen.
    **/
    alimw(req: operations.AlimwRequest, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * alsbl - Application/ License for Boilers
     *
     * API to verify Application/ License for Boilers.
    **/
    alsbl(req: operations.AlsblRequest, config?: AxiosRequestConfig): Promise<operations.AlsblResponse>;
    /**
     * alsfc - Application/ License for Factory
     *
     * API to verify Application/ License for Factory.
    **/
    alsfc(req: operations.AlsfcRequest, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * apptu - Application realted to Trade Unions
     *
     * API to verify Application realted to Trade Unions.
    **/
    apptu(req: operations.ApptuRequest, config?: AxiosRequestConfig): Promise<operations.ApptuResponse>;
    /**
     * clcer - Registration Certificate for Contract Labour License
     *
     * API to verify Registration Certificate for Contract Labour License.
    **/
    clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * noocl - Notice of Closure
     *
     * API to verify Notice of Closure.
    **/
    noocl(req: operations.NooclRequest, config?: AxiosRequestConfig): Promise<operations.NooclResponse>;
    /**
     * srcer - Registration Certificate of Shops And Commercial Establishment
     *
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
export {};
