import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.goog.io",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
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
  crawl(
    req: operations.CrawlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CrawlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CrawlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/crawl/{query}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CrawlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.crawl200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTheStatusOfTheApiService - Status
   *
   * It "status" == true then API is up, else the API is down
  **/
  getTheStatusOfTheApiService(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTheStatusOfTheApiServiceResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTheStatusOfTheApiServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTheStatusOfTheApiService200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  images(
    req: operations.ImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/images/{query}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.images200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  news(
    req: operations.NewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/news/{query}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.news200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  search(
    req: operations.SearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/search/{query}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.search200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  serp(
    req: operations.SerpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SerpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SerpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/serp/";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SerpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serp200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
