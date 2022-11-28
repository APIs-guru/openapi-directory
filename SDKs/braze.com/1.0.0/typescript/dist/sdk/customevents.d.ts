import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * customEventsAnalytics - Custom Events Analytics
     *
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
    customEventsAnalytics(req: operations.CustomEventsAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.CustomEventsAnalyticsResponse>;
    /**
     * customEventsList - Custom Events List
     *
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
    customEventsList(req: operations.CustomEventsListRequest, config?: AxiosRequestConfig): Promise<operations.CustomEventsListResponse>;
}
