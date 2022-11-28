import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuiltInIntentSummary
/** 
 * Provides summary information about a built-in intent for the <a>ListBuiltInIntents</a> operation.
**/
export class BuiltInIntentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=intentSignature" })
  intentSignature?: string;
}
