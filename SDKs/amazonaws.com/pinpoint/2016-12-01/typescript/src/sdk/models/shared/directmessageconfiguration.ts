import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdmMessage } from "./admmessage";
import { ApnsMessage } from "./apnsmessage";
import { BaiduMessage } from "./baidumessage";
import { DefaultMessage } from "./defaultmessage";
import { DefaultPushNotificationMessage } from "./defaultpushnotificationmessage";
import { EmailMessage } from "./emailmessage";
import { GcmMessage } from "./gcmmessage";
import { SmsMessage } from "./smsmessage";
import { VoiceMessage } from "./voicemessage";



// DirectMessageConfiguration
/** 
 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
**/
export class DirectMessageConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADMMessage" })
  admMessage?: AdmMessage;

  @SpeakeasyMetadata({ data: "json, name=APNSMessage" })
  apnsMessage?: ApnsMessage;

  @SpeakeasyMetadata({ data: "json, name=BaiduMessage" })
  baiduMessage?: BaiduMessage;

  @SpeakeasyMetadata({ data: "json, name=DefaultMessage" })
  defaultMessage?: DefaultMessage;

  @SpeakeasyMetadata({ data: "json, name=DefaultPushNotificationMessage" })
  defaultPushNotificationMessage?: DefaultPushNotificationMessage;

  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: EmailMessage;

  @SpeakeasyMetadata({ data: "json, name=GCMMessage" })
  gcmMessage?: GcmMessage;

  @SpeakeasyMetadata({ data: "json, name=SMSMessage" })
  smsMessage?: SmsMessage;

  @SpeakeasyMetadata({ data: "json, name=VoiceMessage" })
  voiceMessage?: VoiceMessage;
}
