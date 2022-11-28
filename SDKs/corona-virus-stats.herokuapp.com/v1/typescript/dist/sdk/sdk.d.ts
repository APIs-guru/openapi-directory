import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://corona-virus-stats.herokuapp.com/api/v1"];
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
     * casesGeneralStatsList - Get the general stats
    **/
    casesGeneralStatsList(config?: AxiosRequestConfig): Promise<operations.CasesGeneralStatsListResponse>;
    /**
     * casesSearch - search a country
    **/
    casesSearch(req: operations.CasesSearchRequest, config?: AxiosRequestConfig): Promise<operations.CasesSearchResponse>;
    docsList(config?: AxiosRequestConfig): Promise<operations.DocsListResponse>;
}
export {};
