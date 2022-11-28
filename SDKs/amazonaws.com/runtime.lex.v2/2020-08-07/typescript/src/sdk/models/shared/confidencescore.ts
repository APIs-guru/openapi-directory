import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfidenceScore
/** 
 * Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent.
**/
export class ConfidenceScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
