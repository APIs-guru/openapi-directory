import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
**/
export declare class SmsMessage extends SpeakeasyBase {
    body?: string;
    entityId?: string;
    keyword?: string;
    mediaUrl?: string;
    messageType?: MessageTypeEnum;
    originationNumber?: string;
    senderId?: string;
    substitutions?: Map<string, string[]>;
    templateId?: string;
}
