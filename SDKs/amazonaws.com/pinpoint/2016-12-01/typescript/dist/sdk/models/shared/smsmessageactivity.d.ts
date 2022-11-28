import { SpeakeasyBase } from "../../../internal/utils";
import { JourneySmsMessage } from "./journeysmsmessage";
/**
 * Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
**/
export declare class SmsMessageActivity extends SpeakeasyBase {
    messageConfig?: JourneySmsMessage;
    nextActivity?: string;
    templateName?: string;
    templateVersion?: string;
}
