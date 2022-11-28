import { SpeakeasyBase } from "../../../internal/utils";
import { JourneyEmailMessage } from "./journeyemailmessage";
/**
 * Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
**/
export declare class EmailMessageActivity extends SpeakeasyBase {
    messageConfig?: JourneyEmailMessage;
    nextActivity?: string;
    templateName?: string;
    templateVersion?: string;
}
