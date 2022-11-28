import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Messaging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUpcomingScheduledCampaignsAndCanvases - Get Upcoming Scheduled Campaigns and Canvases
     *
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
    getUpcomingScheduledCampaignsAndCanvases(req: operations.GetUpcomingScheduledCampaignsAndCanvasesRequest, config?: AxiosRequestConfig): Promise<operations.GetUpcomingScheduledCampaignsAndCanvasesResponse>;
    /**
     * scheduleApiTriggeredCanvases - Schedule API Triggered Canvases
     *
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
    scheduleApiTriggeredCanvases(req: operations.ScheduleApiTriggeredCanvasesRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleApiTriggeredCanvasesResponse>;
}
