import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.archive.org"];
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
     * getSearchV1Fields - Fields that can be requested
    **/
    getSearchV1Fields(req: operations.GetSearchV1FieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1FieldsResponse>;
    /**
     * getSearchV1Organic - Return relevance-based results from search queries
     *
    **/
    getSearchV1Organic(req: operations.GetSearchV1OrganicRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1OrganicResponse>;
    /**
     * getSearchV1Scrape - Scrape search results from Internet Archive, allowing a scrolling cursor
     *
    **/
    getSearchV1Scrape(req: operations.GetSearchV1ScrapeRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchV1ScrapeResponse>;
}
export {};
