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
     * API to verify Application/ License for Factory.
    **/
    Alsfc(req: operations.AlsfcRequest, config?: AxiosRequestConfig): Promise<operations.AlsfcResponse>;
    /**
     * API to verify Registration Certificate for Contract Labour License.
    **/
    Clcer(req: operations.ClcerRequest, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * API to verify Registration Certificate of Shops And Commercial Establishment.
    **/
    Srcer(req: operations.SrcerRequest, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
export {};
