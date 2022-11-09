import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JourneyEmailMessage } from "./journeyemailmessage";


// EmailMessageActivity
/** 
 * Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
**/
export class EmailMessageActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneyEmailMessage;

  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
