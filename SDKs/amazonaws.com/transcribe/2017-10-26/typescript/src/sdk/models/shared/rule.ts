import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterruptionFilter } from "./interruptionfilter";
import { NonTalkTimeFilter } from "./nontalktimefilter";
import { SentimentFilter } from "./sentimentfilter";
import { TranscriptFilter } from "./transcriptfilter";



// Rule
/** 
 * A condition in the call between the customer and the agent that you want to filter for.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InterruptionFilter" })
  interruptionFilter?: InterruptionFilter;

  @SpeakeasyMetadata({ data: "json, name=NonTalkTimeFilter" })
  nonTalkTimeFilter?: NonTalkTimeFilter;

  @SpeakeasyMetadata({ data: "json, name=SentimentFilter" })
  sentimentFilter?: SentimentFilter;

  @SpeakeasyMetadata({ data: "json, name=TranscriptFilter" })
  transcriptFilter?: TranscriptFilter;
}
