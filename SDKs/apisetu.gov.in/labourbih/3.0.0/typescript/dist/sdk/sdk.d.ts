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
     * API to verify Application for License for Inter State Migrant Workmen.
    **/
    Alimw(req: operations.AlimwRequest, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * API to verify Application/ License for Boilers.
    **/
    Alsbl(req: operations.AlsblRequest, config?: AxiosRequestConfig): Promise<operations.AlsblResponse>;
    /**
     * API to verify Application/ License for Factory.
    **/
    Alsfc(req: operations.AlsfcRequest, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * API to verify Application realted to Trade Unions.
    **/
    Apptu(req: operations.ApptuRequest, config?: AxiosRequestConfig): Promise<operations.ApptuResponse>;
    /**
     * API to verify Registration Certificate for Contract Labour License.
    **/
    Clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * API to verify Notice of Closure.
    **/
    Noocl(req: operations.NooclRequest, config?: AxiosRequestConfig): Promise<operations.NooclResponse>;
    /**
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    Srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
export {};
