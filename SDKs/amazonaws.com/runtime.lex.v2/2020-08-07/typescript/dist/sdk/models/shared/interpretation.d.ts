import { SpeakeasyBase } from "../../../internal/utils";
import { Intent } from "./intent";
import { ConfidenceScore } from "./confidencescore";
import { SentimentResponse } from "./sentimentresponse";
/**
 * An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score.
**/
export declare class Interpretation extends SpeakeasyBase {
    intent?: Intent;
    nluConfidence?: ConfidenceScore;
    sentimentResponse?: SentimentResponse;
}
