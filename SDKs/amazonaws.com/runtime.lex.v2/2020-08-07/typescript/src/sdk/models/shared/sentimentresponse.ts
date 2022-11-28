import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SentimentTypeEnum } from "./sentimenttypeenum";
import { SentimentScore } from "./sentimentscore";



// SentimentResponse
/** 
 * <p>Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p>
**/
export class SentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: SentimentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sentimentScore" })
  sentimentScore?: SentimentScore;
}
