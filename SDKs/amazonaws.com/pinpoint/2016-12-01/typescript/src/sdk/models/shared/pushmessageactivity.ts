import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JourneyPushMessage } from "./journeypushmessage";


// PushMessageActivity
/** 
 * Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
**/
export class PushMessageActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneyPushMessage;

  @Metadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
