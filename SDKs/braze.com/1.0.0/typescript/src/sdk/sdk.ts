import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://rest.iad-01.braze.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // AppSessionsByTime - App Sessions by Time
  /** 
   * This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.
   * 
   * ### Components Used
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
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
   *             "sessions" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  AppSessionsByTime(
    req: operations.AppSessionsByTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppSessionsByTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppSessionsByTimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sessions/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AppSessionsByTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CampaignAnalytics - Campaign Analytics
  /** 
   * This endpoint allows you to retrieve a daily series of various stats for a campaign over time. Data returned includes how many messages were sent, opened, clicked, converted, etc., broken down by message channel. 
   * 
   * ### Components Used
   * -[Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * 
   * ### Responses
   * 
   * #### Multi-Channel Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "messages" : {
   *                 "ios_push" : [
   *                     {
   *                       "variation_name": "iOS_Push",
   *                       "sent" : (int),
   *                       "direct_opens" : (int),
   *                       "total_opens" : (int),
   *                       "bounces" : (int),
   *                       "body_clicks" : (int)
   *                       "revenue": 0,
   *                       "unique_recipients": 1,
   *                       "conversions": 0,
   *                       "conversions_by_send_time": 0,
   *                       "conversions1": 0,
   *                       "conversions1_by_send_time": 0,
   *                       "conversions2": 0,
   *                       "conversions2_by_send_time": 0,
   *                       "conversions3": 0,
   *                       "conversions3_by_send_time": 0,
   *                       "carousel_slide_[NUM]_[TITLE]_click": (optional, int),
   *                       "notif_button_[NUM]_[TITLE]_click": (optional, int)
   *                     }
   *                 ],
   *                 "android_push" : [
   *                     {
   *                       "sent" : (int),
   *                       "direct_opens" : (int),
   *                       "total_opens" : (int),
   *                       "bounces" : (int),
   *                       "body_clicks" : (int)
   *                     }
   *                 ],
   *                 "webhook": [
   *                     {
   *                       "sent": (int),
   *                       "errors": (int)
   *                     }
   *                 ],
   *                 "email" : [
   *                     {
   *                       "sent": (int),
   *                       "opens": (int),
   *                       "unique_opens": (int),
   *                       "clicks": (int),
   *                       "unique_clicks": (int),
   *                       "unsubscribes": (int),
   *                       "bounces": (int),
   *                       "delivered": (int),
   *                       "reported_spam": (int)
   *                     }
   *                 ],
   *                 "sms" : [
   *                   {
   *                     "sent": (int),
   *                     "delivered": (int),
   *                     "undelivered": (int),
   *                     "delivery_failed": (int)
   *                   }
   *                 ]
   *               },
   *            "conversions_by_send_time": (optional, int),
   *            "conversions1_by_send_time": (optional, int),
   *            "conversions2_by_send_time": (optional, int),
   *            "conversions3_by_send_time": (optional, int),
   *            "conversions": (int),
   *            "conversions1": (optional, int),
   *            "conversions2": (optional, int),
   *            "conversions3": (optional, int),
   *            "unique_recipients": (int),
   *            "revenue": (optional, float)
   *         },
   *         ...
   *     ],
   *     ...
   * }
   * ```
   * 
   * #### Multivariate Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "conversions" : (int),
   *             "revenue": (float),
   *             "conversions_by_send_time": (int),
   *             "messages" : {
   *                "trigger_in_app_message": [{
   *       				"variation_name": (optional, string),
   *       				"impressions": (int),
   *       				"clicks": (int),
   *       				"first_button_clicks": (int),
   *       				"second_button_clicks": (int),
   *       				"revenue": (optional, float),,
   *       				"unique_recipients": (int),
   *       				"conversions": (optional, int),
   *       				"conversions_by_send_time": (optional, int),
   *       				"conversions1": (optional, int),
   *       				"conversions1_by_send_time": (optional, int),
   *       				"conversions2": (optional, int),
   *       				"conversions2_by_send_time": (optional, int),
   *       				"conversions3": (optional, int),
   *       				"conversions3_by_send_time": (optional, int)
   *       			}, {
   *       				"variation_name": (optional, string),
   *       				"impressions": (int),
   *       				"clicks": (int),
   *       				"first_button_clicks": (int),
   *       				"second_button_clicks": (int),
   *       				"revenue": (optional, float),,
   *       				"unique_recipients": (int),
   *       				"conversions": (optional, int),
   *       				"conversions_by_send_time": (optional, int),
   *       				"conversions1": (optional, int),
   *       				"conversions1_by_send_time": (optional, int),
   *       				"conversions2": (optional, int),
   *       				"conversions2_by_send_time": (optional, int),
   *       				"conversions3": (optional, int).
   *       				"conversions3_by_send_time": (optional, int)
   *       			}, {
   *       				"variation_name": (optional, string),
   *       				"revenue": (optional, float),,
   *       				"unique_recipients": (int),
   *       				"conversions": (optional, int),
   *       				"conversions_by_send_time": (optional, int),
   *       				"conversions1": (optional, int),
   *       				"conversions1_by_send_time": (optional, int),
   *       				"conversions2": (optional, int),
   *       				"conversions2_by_send_time": (optional, int),
   *       				"conversions3": (optional, int),
   *       				"conversions3_by_send_time": (optional, int),
   *       				"enrolled": (optional, int)
   *       			}]
   *       		},
   *       		"conversions_by_send_time": (optional, int),
   *       		"conversions1_by_send_time": (optional, int),
   *       		"conversions2_by_send_time": (optional, int),
   *       		"conversions3_by_send_time": (optional, int),
   *       		"conversions": (optional, int,
   *       		"conversions1": (optional, int),
   *       		"conversions2": (optional, int),
   *       		"conversions3": (optional, int),
   *       		"unique_recipients": (int),
   *       		"revenue": (optional, float)
   *          }],
   *          ...
   * }
   * ```
   * 
   * Possible message types are `email`, `in_app_message`, `webhook`, `android_push`, `apple_push`, `kindle_push`, `web_push`, `windows_phone8_push`, and `windows_universal_push`. All push message types will have the same statistics shown for `android_push` above.
  **/
  CampaignAnalytics(
    req: operations.CampaignAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CampaignAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CampaignAnalyticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/campaigns/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CampaignAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CampaignDetails - Campaign Details
  /** 
   * This endpoint allows you to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`. 
   * 
   * > The campaign_id for API campaigns can be found on the Developer Console page and the campaign details page within your dashboard or you can use the Campaign List Endpoint.
   * 
   * ### Components Used
   * - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * 
   * ### Campaign Details Endpoint API Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "created_at" : (string) date created as ISO 8601 date,
   *     "updated_at" : (string) date last updated as ISO 8601 date,
   *     "archived": (boolean) whether this Campaign is archived,
   *     "draft": (boolean) whether this Campaign is a draft,
   *     "name" : (string) campaign name,
   *     "description" : (string) campaign description,
   *     "schedule_type" : (string) type of scheduling action,
   *     "channels" : (array) list of channels to send via,
   *     "first_sent" : (string) date and hour of first sent as ISO 8601 date,
   *     "last_sent" : (string) date and hour of last sent as ISO 8601 date,
   *     "tags" : (array) tag names associated with the campaign,
   *     "messages": {
   *         "message_variation_id": (string) { // <=This is the actual id
   *             "channel": (string) channel type of the message (as in, "email", "ios_push", "webhook", "content_card", "in-app_message", "sms"),
   *             "name": (string) name of the message in the Dashboard (eg., "Variation 1")
   *             ... channel-specific fields for this message, see below ...
   *         }
   *     },
   *     "conversion_behaviors": (array) conversion event behaviors assigned to the campaign (see below)
   * }
   * ```
   * 
   * #### Messages
   * 
   * The `messages` response will contain information about each message. Example message responses for channels are below:
   * 
   * ##### Push Channels
   * 
   * ```json
   * {
   *     "channel": (string) description of the channel, such as "ios_push" or "android_push"
   *     "alert": (string) alert body text,
   *     "extras": (hash) any key value pairs provided
   * }
   * ```
   * 
   * ##### Email Channel
   * 
   * ```json
   * {
   *     "channel": "email",
   *     "subject": (string) subject,
   *     "body": (string) HTML body,
   *     "from": (string) from address and display name,
   *     "reply_to": (string) reply-to for message, if different than "from" address,
   *     "title": (string) name of the email,
   *     "extras": (hash) any key value pairs provided
   * }
   * ```
   * 
   * ##### Content Card Channel
   * 
   * ```json
   * {
   *     "channel": "content_cards",
   *     "name": (string) name of variant,
   *     "extras": (hash) any key value pairs provided; only present if at least one key-value pair has been set
   * }
   * ```
   * 
   * ##### Webhook Channel
   * 
   * ```json
   * {
   *     "channel": "webhook",
   *     "url": (string) url for webhook,
   *     "body": (string) payload body,
   *     "type": (string) body content type,
   *     "headers": (hash) specified request headers,
   *     "method": (string) HTTP method (e.g., "POST" or "GET"),
   * }
   * ```
   * 
   * ##### SMS Channel
   * 
   * ```json
   * {
   *   "channel": "sms",
   *   "body": (string) payload body,
   *   "from": (string) list of numbers associated with the subscription group,
   *   "subscription_group_id": (string) API id of the subscription group targeted in the SMS message
   * }
   * ```
   * 
   * ##### Control Messages
   * 
   * ```json
   * {
   *     "channel": (string) description of the channel that the control is for,
   *     "type": "control"
   * }
   * ```
   * 
   * #### Conversion Behaviors
   * 
   * The `conversion_behaviors` array will contain information about each conversion event behavior set for the campaign. These behaviors are in order as set by the campaign. For example, Conversion Event A will be the first item in the array, Conversion Event B will be second, etc. Example conversion event behavior responses for are below:
   * 
   * ##### Clicks Email
   * 
   * ```json
   * {
   *     "type": "Clicks Email",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
   * }
   * ```
   * 
   * ##### Opens Email
   * 
   * ```json
   * {
   *     "type": "Opens Email",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
   * }
   * ```
   * 
   * ##### Makes Purchase (any purchase)
   * 
   * ```json
   * {
   *     "type": "Makes Any Purchase",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
   * }
   * ```
   * 
   * ##### Makes Purchase (specific product)
   * 
   * ```json
   * {
   *     "type": "Makes Specific Purchase",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
   *     "product": (string) name of the product, i.e. - "Feline Body Armor"
   * }
   * ```
   * 
   * ##### Performs Custom Event
   * 
   * ```json
   * {
   *     "type": "Performs Custom Event",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
   *     "custom_event_name": (string) name of the event, i.e. - "Used Feline Body Armor"
   * }
   * ```
   * 
   * ##### Upgrades App
   * 
   * ```json
   * {
   *     "type": "Upgrades App",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
   *     "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
   * }
   * ```
   * 
   * ##### Uses App
   * 
   * ```json
   * {
   *     "type": "Starts Session",
   *     "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
   *     "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
   * }
   * ```
  **/
  CampaignDetails(
    req: operations.CampaignDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CampaignDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CampaignDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/campaigns/details";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CampaignDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CampaignList - Campaign List
  /** 
   * This endpoint allows you to export a list of campaigns, each of which will include its name, Campaign API Identifier, whether it is an API Campaign, and Tags associated with the campaign. The campaigns are returned in groups of 100 sorted by time of creation (oldest to newest by default).
   * 
   * ## Campaign List Endpoint API Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "campaigns" : [
   *         {
   *             "id" : (string) Campaign API Identifier,
   *             "last_edited": (ISO 8601 string) the last edited time for the message 
   *             "name" : (string) campaign name,
   *             "is_api_campaign" : (boolean) whether the campaign is an API Campaign,
   *             "tags" : (array) tag names associated with the campaign
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  CampaignList(
    req: operations.CampaignListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CampaignListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CampaignListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/campaigns/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CampaignListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CanvasDataAnalyticsSummary - Canvas Data Analytics Summary
  /** 
   * This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.
   * 
   * ### Components Used
   * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "data": {
   *     "name": (string) Canvas name,
   *     "total_stats": {
   *       "revenue": (float),
   *       "conversions": (int),
   *       "conversions_by_entry_time": (int),
   *       "entries": (int)
   *     },
   *     "variant_stats": (optional) {
   *       "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
   *         "name": (string) name of variant,
   *         "revenue": (float),
   *         "conversions": (int),
   *         "entries": (int)
   *       },
   *       ... (more variants)
   *     },
   *     "step_stats": (optional) {
   *       "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
   *         "name": (string) name of step,
   *         "revenue": (float),
   *         "conversions": (int),
   *         "conversions_by_entry_time": (int),
   *         "messages": {
   *           "android_push": (name of channel) [
   *             {
   *               "sent": (int),
   *               "opens": (int),
   *               "influenced_opens": (int),
   *               "bounces": (int)
   *               ... (more stats for channel)
   *             }
   *           ],
   *           ... (more channels)
   *         }
   *       },
   *       ... (more steps)
   *     }
   *   },
   *   "message": (required, string) the status of the export, returns 'success' when completed without errors
   * }
   * ```
  **/
  CanvasDataAnalyticsSummary(
    req: operations.CanvasDataAnalyticsSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CanvasDataAnalyticsSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CanvasDataAnalyticsSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/canvas/data_summary";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CanvasDataAnalyticsSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CanvasDataSeriesAnalytics - Canvas Data Series Analytics
  /** 
   * This endpoint allows you to export time series data for a Canvas.
   * 
   * ### Components Used
   * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ## Response
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "data": {
   *     "name": (string) Canvas name,
   *     "stats": [
   *       {
   *         "time": (string) date as ISO 8601 date,
   *         "total_stats": {
   *           "revenue": (float),
   *           "conversions": (int),
   *           "conversions_by_entry_time": (int),
   *           "entries": (int)
   *         },
   *         "variant_stats": (optional) {
   *           "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
   *             "name": (string) name of variant,
   *             "revenue": (int),
   *             "conversions": (int),
   *             "conversions_by_entry_time": (int),
   *             "entries": (int)
   *           },
   *           ... (more variants)
   *         },
   *         "step_stats": (optional) {
   *           "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
   *             "name": (string) name of step,
   *             "revenue": (float),
   *             "conversions": (int),
   *             "conversions_by_entry_time": (int),
   *             "messages": {
   *               "email": [
   *                 {
   *                   "sent": (int),
   *                   "opens": (int),
   *                   "unique_opens": (int),
   *                   "clicks": (int),
   *                   ... (more stats)
   *                 }
   *               ],
   *               ... (more channels)
   *             }
   *           },
   *           ... (more steps)
   *         }
   *       },
   *       ... (more stats by time)
   *     ]
   *   },
   *   "message": (required, string) the status of the export, returns 'success' when completed without errors
   * }
   * ```
  **/
  CanvasDataSeriesAnalytics(
    req: operations.CanvasDataSeriesAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CanvasDataSeriesAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CanvasDataSeriesAnalyticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/canvas/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CanvasDataSeriesAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CanvasDetails - Canvas Details
  /** 
   * This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.
   * 
   * ### Components Used
   * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "created_at": (string) date created as ISO 8601 date,
   *   "updated_at": (string) date updated as ISO 8601 date,
   *   "name": (string) Canvas name,
   *   "description": (string) Canvas description,
   *   "archived": (boolean) whether this Canvas is archived,
   *   "draft": (boolean) whether this Canvas is a draft,
   *   "schedule_type": (string) type of scheduling action,
   *   "first_entry": (string) date of first entry as ISO 8601 date,
   *   "last_entry": (string) date of last entry as ISO 8601 date,
   *   "channels": (array of strings) step channels used with Canvas,
   *   "variants": [
   *     {
   *       "name": (string) name of variant,
   *       "id": (string) API identifier of the variant,
   *       "first_step_ids": (array of strings) API identifiers for first steps in variant,
   *       "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
   *     },
   *     ... (more variations)
   *   ],
   *   "tags": (array of strings) tag names associated with the Canvas,
   *   "steps": [
   *     {
   *       "name": (string) name of step,
   *       "id": (string) API identifier of the step,
   *       "next_step_ids": (array of strings) API identifiers of steps following step,
   *       "channels": (array of strings) channels used in step,
   *       "messages": {
   *           "message_variation_id": (string) {  // <=This is the actual id
   *               "channel": (string) channel type of the message (eg., "email"),
   *               ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
   *           }
   *       }
   *     },
   *     ... (more steps)
   *   ],
   *   "message": (required, string) the status of the export, returns 'success' when completed without errors
   * }
   * ```
  **/
  CanvasDetails(
    req: operations.CanvasDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CanvasDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CanvasDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/canvas/details";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CanvasDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CanvasList - Canvas List
  /** 
   * This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).
   * 
   * > Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "canvases" : [
   *   	{
   *   		"id" : (string) Canvas API Identifier,
   *   		"last_edited": (ISO 8601 string) the last edited time for the message,
   *   		"name" : (string) Canvas name,
   *   		"tags" : (array) tag names associated with the Canvas,
   *   	},
   *     ... (more Canvases)
   *   ],
   *   "message": (required, string) the status of the export, returns 'success' when completed without errors
   * }
   * ```
  **/
  CanvasList(
    req: operations.CanvasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CanvasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CanvasListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/canvas/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CanvasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CustomEventsAnalytics - Custom Events Analytics
  /** 
   * This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.
   * 
   * ### Components Used
   * -[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
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
   *             "count" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
   * 
   * ### Fatal Error Response Codes
   * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
   * 
   * | Error Code       | Reason / Cause                                                   |
   * | ---------------- | ---------------------------------------------------------------- |
   * | 400 Bad Request  | Bad Syntax                                                       |
   * | 401 Unauthorized | Unknown or missing REST API Key                                  |
   * | 429 Rate Limited | Over rate limit                                                  |
   * | 5XX              | Internal server error, you should retry with exponential backoff |
  **/
  CustomEventsAnalytics(
    req: operations.CustomEventsAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CustomEventsAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CustomEventsAnalyticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/events/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CustomEventsAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CustomEventsList - Custom Events List
  /** 
   * This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "events" : [
   *         "Event A",
   *         "Event B",
   *         "Event C",
   *         ...
   *     ]
   * }
   * ```
   * 
   * ### Fatal Error Response Codes
   * 
   * The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.
   * 
   * | Error Code       | Reason / Cause                                                   |
   * | ---------------- | ---------------------------------------------------------------- |
   * | 400 Bad Request  | Bad Syntax                                                       |
   * | 401 Unauthorized | Unknown or missing REST API Key                                  |
   * | 429 Rate Limited | Over rate limit                                                  |
   * | 5XX              | Internal server error, you should retry with exponential backoff |
  **/
  CustomEventsList(
    req: operations.CustomEventsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CustomEventsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CustomEventsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/events/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CustomEventsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DailyActiveUsersByDate - Daily Active Users by Date
  /** 
   * This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
   * 
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
   *             "time" : (string) date as ISO 8601 date,
   *             "dau" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  DailyActiveUsersByDate(
    req: operations.DailyActiveUsersByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DailyActiveUsersByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DailyActiveUsersByDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/dau/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DailyActiveUsersByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DailyNewUsersByDate - Daily New Users by Date
  /** 
   * This endpoint allows you to retrieve a daily series of the total number of new users on each date.
   * 
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
   *             "time" : (string) date as ISO 8601 date,
   *             "new_users" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  DailyNewUsersByDate(
    req: operations.DailyNewUsersByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DailyNewUsersByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DailyNewUsersByDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/new_users/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DailyNewUsersByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetUpcomingScheduledCampaignsAndCanvases - Get Upcoming Scheduled Campaigns and Canvases
  /** 
   * You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "scheduled_broadcasts": [
   *       # Example Canvas
   *       {
   *         "name" => String,
   *         "id" => String,
   *         "type" => "Canvas",
   *         "tags" => [String tag names],
   *         "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
   *         "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
   *       },
   *       # Example Campaign
   *       {
   *         "name" => String,
   *         "id" => String,
   *         "type" => "Campaign",
   *         "tags" => [String tag names],
   *         "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
   *         "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
   *       },
   *     ]
   * }
   * ```
  **/
  GetUpcomingScheduledCampaignsAndCanvases(
    req: operations.GetUpcomingScheduledCampaignsAndCanvasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUpcomingScheduledCampaignsAndCanvasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUpcomingScheduledCampaignsAndCanvasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/messages/scheduled_broadcasts";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetUpcomingScheduledCampaignsAndCanvasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // KpIsForDailyAppUninstallsByDate - KPIs for Daily App Uninstalls by Date
  /** 
   * This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
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
   *             "time" : (string) date as ISO 8601 date,
   *             "uninstalls" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  KpIsForDailyAppUninstallsByDate(
    req: operations.KpIsForDailyAppUninstallsByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.KpIsForDailyAppUninstallsByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.KpIsForDailyAppUninstallsByDateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/uninstalls/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.KpIsForDailyAppUninstallsByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAvailableContentBlocks - List Available Content Blocks
  /** 
   * This endpoint will list existing Content Block information.
   * 
   * ### Successful Response Properties
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR_REST_API_KEY
   * {
   *   "count": "integer",
   *   "content_blocks": [
   *     {
   *       "content_block_id": "string",
   *       "name": "string",
   *       "content_type": "html or text",
   *       "liquid_tag": "string",
   *       "inclusion_count" : "integer",
   *       "created_at": "time-in-iso",
   *       "last_edited": "time-in-iso",
   *       "tags" : "array of strings"
   *     }
   *   ]
   * }
   * ```
   * 
   * ### Possible Errors
   * - `Modified after time is invalid.`
   * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
   * 
   * - `Modified before time is invalid.`
   * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
   * 
   * - `Modified after time must be earlier than or the same as modified before time.`
   * 
   * - `Content Block number limit is invalid.`
   * The `limit` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Content Block number limit must be greater than 0.`
   * The `limit` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Content Block number limit exceeds maximum of 1000.`
   * The `limit` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Offset is invalid.`
   * The `offset` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Offset must be greater than 0.`
   * The `offset` parameter must be an integer (positive number) greater than 0.
  **/
  ListAvailableContentBlocks(
    req: operations.ListAvailableContentBlocksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailableContentBlocksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailableContentBlocksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/content_blocks/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAvailableContentBlocksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAvailableEmailTemplates - List Available Email Templates
  /** 
   * Use this endpoint to get a list of available templates in your Braze account.
   * 
   * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
   * 
   * ### Successful Response Properties
   * ```json
   * {
   *   "count": number of templates returned
   *   "templates": [template with the following properties]:
   *     "email_template_id": (string) your email template's API Identifier,
   *     "template_name": (string) the name of your email template,
   *     "created_at": (string, in ISO 8601),
   *     "updated_at": (string, in ISO 8601),
   *     "tags": (array of strings) tags appended to the template
   * }
   *   ```
  **/
  ListAvailableEmailTemplates(
    req: operations.ListAvailableEmailTemplatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailableEmailTemplatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailableEmailTemplatesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/templates/email/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAvailableEmailTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUserSSubscriptionGroupSms - List User's Subscription Group - SMS
  /** 
   * Use the endpoint below to list and get the subscription groups of a certain user.
   * 
   * > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
  **/
  ListUserSSubscriptionGroupSms(
    req: operations.ListUserSSubscriptionGroupSmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserSSubscriptionGroupSmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserSSubscriptionGroupSmsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscription/user/status";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListUserSSubscriptionGroupSmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListUserSSubscriptionGroupStatusSms - List User's  Subscription Group Status - SMS
  /** 
   * Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.
   * 
   * > *Either `external_id` or `email` are required.
   * 
   * ## Response
   * 
   * All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "status": {
   *     "1": "Unsubscribed",
   *     "2": "Subscribed"
   *   },
   *   "message": "success"
   * }
   * ```
  **/
  ListUserSSubscriptionGroupStatusSms(
    req: operations.ListUserSSubscriptionGroupStatusSmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserSSubscriptionGroupStatusSmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserSSubscriptionGroupStatusSmsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscription/status/get";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListUserSSubscriptionGroupStatusSmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MonthlyActiveUsersForLast30Days - Monthly Active Users for Last 30 Days
  /** 
   * This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
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
   *             "time" : (string) date as ISO 8601 date,
   *             "mau" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  MonthlyActiveUsersForLast30Days(
    req: operations.MonthlyActiveUsersForLast30DaysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MonthlyActiveUsersForLast30DaysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MonthlyActiveUsersForLast30DaysRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/mau/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MonthlyActiveUsersForLast30DaysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // NewsFeedCardAnalytics - News Feed Card Analytics
  /** 
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
  NewsFeedCardAnalytics(
    req: operations.NewsFeedCardAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsFeedCardAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsFeedCardAnalyticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feed/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NewsFeedCardAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // NewsFeedCardsDetails - News Feed Cards Details
  /** 
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
  NewsFeedCardsDetails(
    req: operations.NewsFeedCardsDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsFeedCardsDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsFeedCardsDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feed/details";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NewsFeedCardsDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // NewsFeedCardsList - News Feed Cards List
  /** 
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
  NewsFeedCardsList(
    req: operations.NewsFeedCardsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewsFeedCardsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewsFeedCardsListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/feed/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NewsFeedCardsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // QueryHardBouncedEmails - Query Hard Bounced Emails
  /** 
   * This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
   * 
   * > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
   * 
   * ## Response
   * 
   * Entries are listed in descending order.
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "emails": [
   *     {
   *       "email": "example1@braze.com",
   *       "hard_bounced_at": "2016-08-25 15:24:32 +0000"
   *     },
   *     {
   *       "email": "example2@braze.com",
   *       "hard_bounced_at": "2016-08-24 17:41:58 +0000"
   *     },
   *     {
   *       "email": "example3@braze.com",
   *       "hard_bounced_at": "2016-08-24 12:01:13 +0000"
   *     }
   *   ],
   *   "message": "success"
   * }
   * ```
  **/
  QueryHardBouncedEmails(
    req: operations.QueryHardBouncedEmailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryHardBouncedEmailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryHardBouncedEmailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/email/hard_bounces";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.QueryHardBouncedEmailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // QueryListOfUnsubscribedEmailAddresses - Query List of Unsubscribed Email Addresses
  /** 
   * Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
   * 
   * > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
  **/
  QueryListOfUnsubscribedEmailAddresses(
    req: operations.QueryListOfUnsubscribedEmailAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryListOfUnsubscribedEmailAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryListOfUnsubscribedEmailAddressesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/email/unsubscribes";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.QueryListOfUnsubscribedEmailAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ScheduleApiTriggeredCanvases - Schedule API Triggered Canvases
  /** 
   * Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.
   * 
   * This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.
   * 
   * ### Request Parameters
   * 
   * | Parameter | Required | Data Type | Description |
   * | --------- | ---------| --------- | ----------- |
   * |`canvas_id`|Required|String| See canvas identifier|
   * |`send_id` | Optional | String | See send identifier |
   * |`recipients` | Optional | Array of recipient objects | See recipients object |
   * |`audience` | Optional | Connected audience object | See connected audience |
   * |`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if "recipients" object is omitted |
   * | `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
   * | `schedule` | Required | Schedule object | See schedule object |
   * 
   * ## Request Components
   * - [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
   * - [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
   * - [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
   * - [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
   * - [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
   * - [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)
  **/
  ScheduleApiTriggeredCanvases(
    req: operations.ScheduleApiTriggeredCanvasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScheduleApiTriggeredCanvasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScheduleApiTriggeredCanvasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/canvas/trigger/schedule/create";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ScheduleApiTriggeredCanvasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SeeContentBlockInformation - See Content Block Information
  /** 
   * This endpoint will call information for an existing Content Block.
   * 
   * ### Successful Response Properties
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR_REST_API_KEY
   * {
   *   "content_block_id": "string",
   *   "name": "string",
   *   "content": "string",
   *   "description": "string",
   *   "content_type": "html or text",
   *   "tags":  "array of strings",
   *   "created_at": "time-in-iso",
   *   "last_edited": "time-in-iso",
   *   "inclusion_count" : "integer",
   *   "message": "success"
   * }
   * ```
   * 
   * ### Possible Errors
   * - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
   * 
   * - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
   * 
   * - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
   * 
   * - `Include Inclusion Data - error` - One of true or false is not provided.
  **/
  SeeContentBlockInformation(
    req: operations.SeeContentBlockInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeeContentBlockInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeeContentBlockInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/content_blocks/info";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SeeContentBlockInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SeeEmailTemplateInformation - See Email Template Information
  /** 
   * Use to get information on your email templates.
   * 
   * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
   * 
   * ### Request Components
   * - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
  **/
  SeeEmailTemplateInformation(
    req: operations.SeeEmailTemplateInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeeEmailTemplateInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeeEmailTemplateInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/templates/email/info";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SeeEmailTemplateInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SegmentAnalytics - Segment Analytics
  /** 
   * This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
   * 
   * ### Request Components
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
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
   *             "time" : (string) date as ISO 8601 date,
   *             "size" : (int) size of the segment on that date
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  SegmentAnalytics(
    req: operations.SegmentAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SegmentAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SegmentAnalyticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/segments/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SegmentAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SegmentDetails - Segment Details
  /** 
   * This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
   * 
   * ### Request Components
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *       "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *       "created_at" : (string) date created as ISO 8601 date,
   *       "updated_at" : (string) date last updated as ISO 8601 date,
   *       "name" : (string) segment name,
   *       "description" : (string) human-readable description of filters,
   *       "text_description" : (string) segment description, 
   *       "tags" : (array) tag names associated with the segment
   * }
   * ```
  **/
  SegmentDetails(
    req: operations.SegmentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SegmentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SegmentDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/segments/details";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SegmentDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SegmentList - Segment List
  /** 
   * This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
   * 
   * ### Request Components
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "segments" : [
   *         {
   *             "id" : (string) Segment API Identifier,
   *             "name" : (string) segment name,
   *             "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
   *             "tags" : (array) tag names associated with the segment
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  SegmentList(
    req: operations.SegmentListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SegmentListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SegmentListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/segments/list";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SegmentListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendAnalytics - Send Analytics
  /** 
   * This endpoint allows you to retrieve a daily series of various stats for a tracked `send_id`. Braze stores send analytics for 14 days after the send.
   * 
   * Campaign conversions will be attributed towards the most recent send id that a given user has received from the campaign.
   * 
   * > The `send_id` is only generated for API campaign sends targeting segments, connected audiences or broadcasts. When relevant, the `send_id` is included in response for the `messages/send`, `messages/schedule`, `campaign/trigger/send` and `campaign/trigger/schedule` endpoints.
   * 
   * ### Components Used
   * - [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ### Send Analytics Endpoint API Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *             "variation_name": (string) variation name,
   *             "sent": (int) the number of sends,
   *             "delivered": (int) the number of messages successfully delivered,
   *             "undelivered": (int) the number of undelivered,
   *             "delivery_failed": (int) the number of rejected,
   *             "direct_opens": (int) the number of direct opens,
   *             "total_opens": (int) the number of total opens,
   *             "bounces": (int) the number of bounces,
   *             "body_clicks": (int) the number of body clicks,
   *             "revenue": (float) the number of dollars of revenue (USD),
   *             "unique_recipients": (int) the number of unique recipients,
   *             "conversions": (int) the number of conversions,
   *             "conversions_by_send_time": (int) the number of conversions,
   *             "conversions1": (int, optional) the number of conversions for the second conversion event,
   *             "conversions1_by_send_time": (int, optional) the number of conversions for the second conversion event by send time,
   *             "conversions2": (int, optional) the number of conversions for the third conversion event,
   *             "conversions2_by_send_time": (int, optional) the number of conversions for the third conversion event by send time,
   *             "conversions3": (int, optional) the number of conversions for the fourth conversion event,
   *             "conversions3_by_send_time": (int, optional) the number of conversions for the fourth conversion event by send time
   *           }
   *         ]
   *       },
   *       "conversions_by_send_time": 0,
   *       "conversions1_by_send_time": 0,
   *       "conversions2_by_send_time": 0,
   *       "conversions3_by_send_time": 0,
   *       "conversions": 0,
   *       "conversions1": 0,
   *       "conversions2": 0,
   *       "conversions3": 0,
   *       "unique_recipients": 1,
   *       "revenue": 0
   *     }
   *   ],
   *   "message": "success"
   * }
   * ```
  **/
  SendAnalytics(
    req: operations.SendAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendAnalyticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sends/data_series";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SendAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
