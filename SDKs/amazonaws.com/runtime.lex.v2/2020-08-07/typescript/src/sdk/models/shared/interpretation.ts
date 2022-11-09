import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Intent } from "./intent";
import { ConfidenceScore } from "./confidencescore";
import { SentimentResponse } from "./sentimentresponse";


// Interpretation
/** 
 * An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score. 
**/
export class Interpretation extends SpeakeasyBase {
  @Metadata({ data: "json, name=intent" })
  intent?: Intent;

  @Metadata({ data: "json, name=nluConfidence" })
  nluConfidence?: ConfidenceScore;

  @Metadata({ data: "json, name=sentimentResponse" })
  sentimentResponse?: SentimentResponse;
}
