import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntentConfidence
/** 
 * Provides a score that indicates the confidence that Amazon Lex has that an intent is the one that satisfies the user's intent.
**/
export class IntentConfidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=score" })
  score?: number;
}
