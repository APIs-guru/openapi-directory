import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JourneySmsMessage } from "./journeysmsmessage";


// SmsMessageActivity
/** 
 * Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
**/
export class SmsMessageActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneySmsMessage;

  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
