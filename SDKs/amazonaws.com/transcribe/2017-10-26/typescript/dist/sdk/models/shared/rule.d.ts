import { SpeakeasyBase } from "../../../internal/utils";
import { InterruptionFilter } from "./interruptionfilter";
import { NonTalkTimeFilter } from "./nontalktimefilter";
import { SentimentFilter } from "./sentimentfilter";
import { TranscriptFilter } from "./transcriptfilter";
/**
 * A condition in the call between the customer and the agent that you want to filter for.
**/
export declare class Rule extends SpeakeasyBase {
    interruptionFilter?: InterruptionFilter;
    nonTalkTimeFilter?: NonTalkTimeFilter;
    sentimentFilter?: SentimentFilter;
    transcriptFilter?: TranscriptFilter;
}
