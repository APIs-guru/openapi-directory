import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SentimentAnalysisSettings
/** 
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export class SentimentAnalysisSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectSentiment" })
  detectSentiment: boolean;
}
