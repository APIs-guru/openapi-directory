import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SentimentAnalysisSettings
/** 
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export class SentimentAnalysisSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectSentiment" })
  detectSentiment: boolean;
}
