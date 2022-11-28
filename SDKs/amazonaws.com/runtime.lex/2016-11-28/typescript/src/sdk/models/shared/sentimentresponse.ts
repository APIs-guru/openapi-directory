import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SentimentResponse
/** 
 * <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>
**/
export class SentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentimentLabel" })
  sentimentLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentScore" })
  sentimentScore?: string;
}
