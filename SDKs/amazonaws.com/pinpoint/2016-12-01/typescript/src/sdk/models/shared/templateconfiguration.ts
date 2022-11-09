import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Template } from "./template";
import { Template } from "./template";
import { Template } from "./template";
import { Template } from "./template";


// TemplateConfiguration
/** 
 * Specifies the message template to use for the message, for each type of channel.
**/
export class TemplateConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailTemplate" })
  emailTemplate?: Template;

  @Metadata({ data: "json, name=PushTemplate" })
  pushTemplate?: Template;

  @Metadata({ data: "json, name=SMSTemplate" })
  smsTemplate?: Template;

  @Metadata({ data: "json, name=VoiceTemplate" })
  voiceTemplate?: Template;
}
