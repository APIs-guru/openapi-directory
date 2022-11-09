import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CheckDomain(req: operations.CheckDomainRequest, config?: AxiosRequestConfig): Promise<operations.CheckDomainResponse>;
    CreateBatch(req: operations.CreateBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchResponse>;
    DeleteBatch(req: operations.DeleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchResponse>;
    DomainRank(req: operations.DomainRankRequest, config?: AxiosRequestConfig): Promise<operations.DomainRankResponse>;
    GetBatch(req: operations.GetBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchResponse>;
    GetBatches(config?: AxiosRequestConfig): Promise<operations.GetBatchesResponse>;
    QueryDb(req: operations.QueryDbRequest, config?: AxiosRequestConfig): Promise<operations.QueryDbResponse>;
    Whois(req: operations.WhoisRequest, config?: AxiosRequestConfig): Promise<operations.WhoisResponse>;
}
export {};
