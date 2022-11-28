import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://localhost:5000", "https://apispot.io/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * checkDomain - Check domain availability
    **/
    checkDomain(req: operations.CheckDomainRequest, config?: AxiosRequestConfig): Promise<operations.CheckDomainResponse>;
    /**
     * createBatch - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
    **/
    createBatch(req: operations.CreateBatchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchResponse>;
    /**
     * deleteBatch - Delete batch
    **/
    deleteBatch(req: operations.DeleteBatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchResponse>;
    /**
     * domainRank - Check domain rank (authority).
    **/
    domainRank(req: operations.DomainRankRequest, config?: AxiosRequestConfig): Promise<operations.DomainRankResponse>;
    /**
     * getBatch - Get batch
    **/
    getBatch(req: operations.GetBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchResponse>;
    /**
     * getBatches - Get your batches
    **/
    getBatches(config?: AxiosRequestConfig): Promise<operations.GetBatchesResponse>;
    /**
     * queryDb - Query domain database
    **/
    queryDb(req: operations.QueryDbRequest, config?: AxiosRequestConfig): Promise<operations.QueryDbResponse>;
    /**
     * whois - WHOIS query for a domain
    **/
    whois(req: operations.WhoisRequest, config?: AxiosRequestConfig): Promise<operations.WhoisResponse>;
}
export {};
