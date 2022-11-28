import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
**/
export declare class ApnsPushNotificationTemplate extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    mediaUrl?: string;
    rawContent?: string;
    sound?: string;
    title?: string;
    url?: string;
}
