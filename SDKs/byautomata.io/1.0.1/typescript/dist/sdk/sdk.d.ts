import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.byautomata.io"];
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
     * getContentproSearch - Send search terms to receive the most relevant articles and companies.
    **/
    getContentproSearch(req: operations.GetContentproSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetContentproSearchResponse>;
    /**
     * getSearch - Send search terms to receive the most relevant companies along with text snippets.
    **/
    getSearch(req: operations.GetSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchResponse>;
    /**
     * getSimilar - Send a company website to receive a list of companies related to them.
    **/
    getSimilar(req: operations.GetSimilarRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarResponse>;
    /**
     * postContentproSimilarText - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.
    **/
    postContentproSimilarText(req: operations.PostContentproSimilarTextRequest, config?: AxiosRequestConfig): Promise<operations.PostContentproSimilarTextResponse>;
}
export {};
