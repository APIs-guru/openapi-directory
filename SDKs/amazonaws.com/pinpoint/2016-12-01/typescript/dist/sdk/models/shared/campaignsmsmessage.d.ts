import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
**/
export declare class CampaignSmsMessage extends SpeakeasyBase {
    body?: string;
    entityId?: string;
    messageType?: MessageTypeEnum;
    originationNumber?: string;
    senderId?: string;
    templateId?: string;
}
