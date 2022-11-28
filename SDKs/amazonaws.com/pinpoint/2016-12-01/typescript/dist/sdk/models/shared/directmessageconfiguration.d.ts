import { SpeakeasyBase } from "../../../internal/utils";
import { AdmMessage } from "./admmessage";
import { ApnsMessage } from "./apnsmessage";
import { BaiduMessage } from "./baidumessage";
import { DefaultMessage } from "./defaultmessage";
import { DefaultPushNotificationMessage } from "./defaultpushnotificationmessage";
import { EmailMessage } from "./emailmessage";
import { GcmMessage } from "./gcmmessage";
import { SmsMessage } from "./smsmessage";
import { VoiceMessage } from "./voicemessage";
/**
 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
**/
export declare class DirectMessageConfiguration extends SpeakeasyBase {
    admMessage?: AdmMessage;
    apnsMessage?: ApnsMessage;
    baiduMessage?: BaiduMessage;
    defaultMessage?: DefaultMessage;
    defaultPushNotificationMessage?: DefaultPushNotificationMessage;
    emailMessage?: EmailMessage;
    gcmMessage?: GcmMessage;
    smsMessage?: SmsMessage;
    voiceMessage?: VoiceMessage;
}
