import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneySmsMessage } from "./journeysmsmessage";



// SmsMessageActivity
/** 
 * Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
**/
export class SmsMessageActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneySmsMessage;

  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
