import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
**/
export declare class AndroidPushNotificationTemplate extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    imageIconUrl?: string;
    imageUrl?: string;
    rawContent?: string;
    smallImageIconUrl?: string;
    sound?: string;
    title?: string;
    url?: string;
}
