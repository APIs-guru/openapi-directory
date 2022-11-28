import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyEmailMessage } from "./journeyemailmessage";



// EmailMessageActivity
/** 
 * Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
**/
export class EmailMessageActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneyEmailMessage;

  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
