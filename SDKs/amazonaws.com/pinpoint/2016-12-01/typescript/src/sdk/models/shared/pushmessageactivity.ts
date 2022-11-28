import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyPushMessage } from "./journeypushmessage";



// PushMessageActivity
/** 
 * Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
**/
export class PushMessageActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageConfig" })
  messageConfig?: JourneyPushMessage;

  @SpeakeasyMetadata({ data: "json, name=NextActivity" })
  nextActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateVersion" })
  templateVersion?: string;
}
