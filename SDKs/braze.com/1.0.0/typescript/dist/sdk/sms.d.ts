import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listUserSSubscriptionGroupSms - List User's Subscription Group - SMS
     *
     * Use the endpoint below to list and get the subscription groups of a certain user.
     *
     * > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
    **/
    listUserSSubscriptionGroupSms(req: operations.ListUserSSubscriptionGroupSmsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserSSubscriptionGroupSmsResponse>;
    /**
     * listUserSSubscriptionGroupStatusSms - List User's  Subscription Group Status - SMS
     *
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
    listUserSSubscriptionGroupStatusSms(req: operations.ListUserSSubscriptionGroupStatusSmsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserSSubscriptionGroupStatusSmsResponse>;
}
