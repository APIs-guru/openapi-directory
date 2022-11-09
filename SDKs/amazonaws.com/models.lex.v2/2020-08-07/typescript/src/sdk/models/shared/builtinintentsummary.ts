import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuiltInIntentSummary
/** 
 * Provides summary information about a built-in intent for the <a>ListBuiltInIntents</a> operation.
**/
export class BuiltInIntentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=intentSignature" })
  intentSignature?: string;
}
