import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
**/
export declare class Message extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    imageIconUrl?: string;
    imageSmallIconUrl?: string;
    imageUrl?: string;
    jsonBody?: string;
    mediaUrl?: string;
    rawContent?: string;
    silentPush?: boolean;
    timeToLive?: number;
    title?: string;
    url?: string;
}
