import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p>
**/
export declare class SentimentResponse extends SpeakeasyBase {
    sentimentLabel?: string;
    sentimentScore?: string;
}
