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
    GetLookupSha1Sha1(req: operations.GetLookupSha1Sha1Request, config?: AxiosRequestConfig): Promise<operations.GetLookupSha1Sha1Response>;
    GetSessionGetName(req: operations.GetSessionGetNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionGetNameResponse>;
    GetInfo(config?: AxiosRequestConfig): Promise<operations.GetInfoResponse>;
    GetLookup(req: operations.GetLookupRequest, config?: AxiosRequestConfig): Promise<operations.GetLookupResponse>;
    GetSessioncreate(req: operations.GetSessioncreateRequest, config?: AxiosRequestConfig): Promise<operations.GetSessioncreateResponse>;
    PostBulkmd5(config?: AxiosRequestConfig): Promise<operations.PostBulkmd5Response>;
    PostBulksha1(config?: AxiosRequestConfig): Promise<operations.PostBulksha1Response>;
}
export {};
