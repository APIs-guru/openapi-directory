import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ADMMessage" })
  admMessage?: AdmMessage;

  @Metadata({ data: "json, name=APNSMessage" })
  apnsMessage?: ApnsMessage;

  @Metadata({ data: "json, name=BaiduMessage" })
  baiduMessage?: BaiduMessage;

  @Metadata({ data: "json, name=DefaultMessage" })
  defaultMessage?: DefaultMessage;

  @Metadata({ data: "json, name=DefaultPushNotificationMessage" })
  defaultPushNotificationMessage?: DefaultPushNotificationMessage;

  @Metadata({ data: "json, name=EmailMessage" })
  emailMessage?: EmailMessage;

  @Metadata({ data: "json, name=GCMMessage" })
  gcmMessage?: GcmMessage;

  @Metadata({ data: "json, name=SMSMessage" })
  smsMessage?: SmsMessage;

  @Metadata({ data: "json, name=VoiceMessage" })
  voiceMessage?: VoiceMessage;
}
