import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Campaign {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * campaignAnalytics - Campaign Analytics
     *
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
    campaignAnalytics(req: operations.CampaignAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.CampaignAnalyticsResponse>;
    /**
     * campaignDetails - Campaign Details
     *
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
    campaignDetails(req: operations.CampaignDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CampaignDetailsResponse>;
    /**
     * campaignList - Campaign List
     *
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
    campaignList(req: operations.CampaignListRequest, config?: AxiosRequestConfig): Promise<operations.CampaignListResponse>;
    /**
     * sendAnalytics - Send Analytics
     *
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
    sendAnalytics(req: operations.SendAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.SendAnalyticsResponse>;
}
