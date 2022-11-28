import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { CampaignCustomMessage } from "./campaigncustommessage";
import { CampaignEmailMessage } from "./campaignemailmessage";
import { CampaignInAppMessage } from "./campaigninappmessage";
import { CampaignSmsMessage } from "./campaignsmsmessage";
/**
 * Specifies the message configuration settings for a campaign.
**/
export declare class MessageConfiguration extends SpeakeasyBase {
    admMessage?: Message;
    apnsMessage?: Message;
    baiduMessage?: Message;
    customMessage?: CampaignCustomMessage;
    defaultMessage?: Message;
    emailMessage?: CampaignEmailMessage;
    gcmMessage?: Message;
    inAppMessage?: CampaignInAppMessage;
    smsMessage?: CampaignSmsMessage;
}
