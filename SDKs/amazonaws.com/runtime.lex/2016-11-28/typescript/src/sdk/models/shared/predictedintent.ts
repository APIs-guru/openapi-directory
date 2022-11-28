import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntentConfidence } from "./intentconfidence";



// PredictedIntent
/** 
 * An intent that Amazon Lex suggests satisfies the user's intent. Includes the name of the intent, the confidence that Amazon Lex has that the user's intent is satisfied, and the slots defined for the intent.
**/
export class PredictedIntent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidence" })
  nluIntentConfidence?: IntentConfidence;

  @SpeakeasyMetadata({ data: "json, name=slots" })
  slots?: Map<string, string>;
}
