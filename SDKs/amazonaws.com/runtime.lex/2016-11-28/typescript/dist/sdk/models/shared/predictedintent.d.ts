import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IntentConfidence } from "./intentconfidence";
/**
 * An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.
**/
export declare class PredictedIntent extends SpeakeasyBase {
    intentName?: string;
    nluIntentConfidence?: IntentConfidence;
    slots?: Map<string, string>;
}
