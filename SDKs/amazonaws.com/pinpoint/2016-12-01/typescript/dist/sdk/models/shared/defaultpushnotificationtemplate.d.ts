import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
**/
export declare class DefaultPushNotificationTemplate extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    sound?: string;
    title?: string;
    url?: string;
}
