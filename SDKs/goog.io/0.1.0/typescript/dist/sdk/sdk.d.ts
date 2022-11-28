import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.goog.io"];
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
     * crawl - Crawl
     *
     * Perform Google Search
     *
     *  Parameters
     * ----------
     * query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating
     *
     * Returns
     * -------
     * json: a the html source of the results page
    **/
    crawl(req: operations.CrawlRequest, config?: AxiosRequestConfig): Promise<operations.CrawlResponse>;
    /**
     * getTheStatusOfTheApiService - Status
     *
     * It "status" == true then API is up, else the API is down
    **/
    getTheStatusOfTheApiService(config?: AxiosRequestConfig): Promise<operations.GetTheStatusOfTheApiServiceResponse>;
    /**
     * images - Images
     *
     * Perform Google Image Search
     *
     * Parameters
     * ----------
     * query : the string query to perform search. supports advance queries.
     *
     * Returns
     * -------
     * json: a list of results with the link, description, and title for each result
    **/
    images(req: operations.ImagesRequest, config?: AxiosRequestConfig): Promise<operations.ImagesResponse>;
    /**
     * news - News
     *
     * Perform Google News Search
     *
     *  Parameters
     * ----------
     * query : the string query to perform search for Google news. A simple query for `president` will be `q=president`. An example of multiple keyword would be `q=news+about+presdient+trump`. News can also be filtered by country and language. For `US` news and in English the query will be `q=trump&ceid=US:en` for news in Great Britian the query will be `q=trump&ceid=GB:en`
     *
     * Returns
     * -------
     * json: {"feed": { "title" : "trump" ...} , "entites": [ {"title" : "Trump doubles down on divisive messaging in speech to honor Independence Day - CNN", "links": []} ...]}
    **/
    news(req: operations.NewsRequest, config?: AxiosRequestConfig): Promise<operations.NewsResponse>;
    /**
     * search - Search
     *
     * Perform Google Search
     *
     * Parameters
     * ----------
     * query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating
     *
     * Returns
     * -------
     * json: a list of results with the link, description, and title for each result
    **/
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * serp - SERP
     *
     * Perform Google Search and search for website in Search Engine Results Pages (SERP)
     *
     * Parameters
     * ----------
     * query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formatting, it is recommended to set the query `&num=100`
     *
     * Returns
     * -------
     * json: a list of results with the query, website, searched_results, and position. json["position"] will be set to -1 if website is not found in results
    **/
    serp(req: operations.SerpRequest, config?: AxiosRequestConfig): Promise<operations.SerpResponse>;
}
export {};
