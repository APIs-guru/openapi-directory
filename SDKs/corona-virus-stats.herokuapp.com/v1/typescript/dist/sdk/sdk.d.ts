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
    CasesGeneralStatsList(config?: AxiosRequestConfig): Promise<operations.CasesGeneralStatsListResponse>;
    CasesSearch(req: operations.CasesSearchRequest, config?: AxiosRequestConfig): Promise<operations.CasesSearchResponse>;
    DocsList(config?: AxiosRequestConfig): Promise<operations.DocsListResponse>;
}
export {};
