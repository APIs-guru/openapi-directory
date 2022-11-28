import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { CampaignCustomMessage } from "./campaigncustommessage";
import { CampaignEmailMessage } from "./campaignemailmessage";
import { CampaignInAppMessage } from "./campaigninappmessage";
import { CampaignSmsMessage } from "./campaignsmsmessage";



// MessageConfiguration
/** 
 * Specifies the message configuration settings for a campaign.
**/
export class MessageConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADMMessage" })
  admMessage?: Message;

  @SpeakeasyMetadata({ data: "json, name=APNSMessage" })
  apnsMessage?: Message;

  @SpeakeasyMetadata({ data: "json, name=BaiduMessage" })
  baiduMessage?: Message;

  @SpeakeasyMetadata({ data: "json, name=CustomMessage" })
  customMessage?: CampaignCustomMessage;

  @SpeakeasyMetadata({ data: "json, name=DefaultMessage" })
  defaultMessage?: Message;

  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: CampaignEmailMessage;

  @SpeakeasyMetadata({ data: "json, name=GCMMessage" })
  gcmMessage?: Message;

  @SpeakeasyMetadata({ data: "json, name=InAppMessage" })
  inAppMessage?: CampaignInAppMessage;

  @SpeakeasyMetadata({ data: "json, name=SMSMessage" })
  smsMessage?: CampaignSmsMessage;
}
