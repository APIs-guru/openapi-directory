import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InterruptionFilter } from "./interruptionfilter";
import { NonTalkTimeFilter } from "./nontalktimefilter";
import { SentimentFilter } from "./sentimentfilter";
import { TranscriptFilter } from "./transcriptfilter";


// Rule
/** 
 * A condition in the call between the customer and the agent that you want to filter for.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=InterruptionFilter" })
  interruptionFilter?: InterruptionFilter;

  @Metadata({ data: "json, name=NonTalkTimeFilter" })
  nonTalkTimeFilter?: NonTalkTimeFilter;

  @Metadata({ data: "json, name=SentimentFilter" })
  sentimentFilter?: SentimentFilter;

  @Metadata({ data: "json, name=TranscriptFilter" })
  transcriptFilter?: TranscriptFilter;
}
