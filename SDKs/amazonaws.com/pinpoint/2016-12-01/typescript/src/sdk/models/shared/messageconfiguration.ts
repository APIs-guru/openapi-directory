import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";
import { Message } from "./message";
import { Message } from "./message";
import { CampaignCustomMessage } from "./campaigncustommessage";
import { Message } from "./message";
import { CampaignEmailMessage } from "./campaignemailmessage";
import { Message } from "./message";
import { CampaignInAppMessage } from "./campaigninappmessage";
import { CampaignSmsMessage } from "./campaignsmsmessage";


// MessageConfiguration
/** 
 * Specifies the message configuration settings for a campaign.
**/
export class MessageConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADMMessage" })
  admMessage?: Message;

  @Metadata({ data: "json, name=APNSMessage" })
  apnsMessage?: Message;

  @Metadata({ data: "json, name=BaiduMessage" })
  baiduMessage?: Message;

  @Metadata({ data: "json, name=CustomMessage" })
  customMessage?: CampaignCustomMessage;

  @Metadata({ data: "json, name=DefaultMessage" })
  defaultMessage?: Message;

  @Metadata({ data: "json, name=EmailMessage" })
  emailMessage?: CampaignEmailMessage;

  @Metadata({ data: "json, name=GCMMessage" })
  gcmMessage?: Message;

  @Metadata({ data: "json, name=InAppMessage" })
  inAppMessage?: CampaignInAppMessage;

  @Metadata({ data: "json, name=SMSMessage" })
  smsMessage?: CampaignSmsMessage;
}
