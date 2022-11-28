import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class NewsFeed {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * newsFeedCardAnalytics - News Feed Card Analytics
   *
   * This endpoint allows you to retrieve a daily series of engagement stats for a card over time.
   * 
   * ### Components Used
   * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
   * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
   *             "clicks" : (int) ,
   *             "impressions" : (int),
   *             "unique_clicks" : (int),
   *             "unique_impressions" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  newsFeedCardAnalytics(
    req: operations.NewsFeedCardAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsFeedCardAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsFeedCardAnalyticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feed/data_series";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsFeedCardAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * newsFeedCardsDetails - News Feed Cards Details
   *
   * This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.
   * 
   * ### Components Used
   * - [Card ID](https://www.braze.com/docs/api/identifier_types/)
   * - [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) The status of the export, returns 'success' when completed without errors,
   *     "created_at" : (string) Date created as ISO 8601 date,
   *     "updated_at" : (string) Date last updated as ISO 8601 date,
   *     "name" : (string) Card name,
   *     "publish_at" : (string) Date card was published as ISO 8601 date,
   *     "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
   *     "tags" : (array) Tag names associated with the card,
   *     "title" : (string) Title of the card,
   *     "image_url" : (string) Image URL used by this card,
   *     "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
   *     "description" : (string) Description text used by this card,
   *     "archived": (boolean) whether this Card is archived,
   *     "draft": (boolean) whether this Card is a draft,
   * }
   * ```
  **/
  newsFeedCardsDetails(
    req: operations.NewsFeedCardsDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsFeedCardsDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsFeedCardsDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feed/details";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsFeedCardsDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * newsFeedCardsList - News Feed Cards List
   *
   * This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "cards" : [
   *         {
   *             "id" : (string) Card API Identifier,
   *             "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
   *             "title" : (string) title of the card,
   *             "tags" : (array) tag names associated with the card
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  newsFeedCardsList(
    req: operations.NewsFeedCardsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsFeedCardsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsFeedCardsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feed/list";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.NewsFeedCardsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
