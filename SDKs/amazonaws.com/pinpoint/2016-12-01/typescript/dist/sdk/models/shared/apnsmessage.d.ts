import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
**/
export declare class ApnsMessage extends SpeakeasyBase {
    apnsPushType?: string;
    action?: ActionEnum;
    badge?: number;
    body?: string;
    category?: string;
    collapseId?: string;
    data?: Map<string, string>;
    mediaUrl?: string;
    preferredAuthenticationMethod?: string;
    priority?: string;
    rawContent?: string;
    silentPush?: boolean;
    sound?: string;
    substitutions?: Map<string, string[]>;
    threadId?: string;
    timeToLive?: number;
    title?: string;
    url?: string;
}
