import { SpeakeasyBase } from "../../../internal/utils";
import { JourneyPushMessage } from "./journeypushmessage";
/**
 * Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
**/
export declare class PushMessageActivity extends SpeakeasyBase {
    messageConfig?: JourneyPushMessage;
    nextActivity?: string;
    templateName?: string;
    templateVersion?: string;
}
