import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntentConfidence
/** 
 * Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.
**/
export class IntentConfidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
