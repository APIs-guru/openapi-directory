import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";



// TemplateConfiguration
/** 
 * Specifies the message template to use for the message, for each type of channel.
**/
export class TemplateConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailTemplate" })
  emailTemplate?: Template;

  @SpeakeasyMetadata({ data: "json, name=PushTemplate" })
  pushTemplate?: Template;

  @SpeakeasyMetadata({ data: "json, name=SMSTemplate" })
  smsTemplate?: Template;

  @SpeakeasyMetadata({ data: "json, name=VoiceTemplate" })
  voiceTemplate?: Template;
}
