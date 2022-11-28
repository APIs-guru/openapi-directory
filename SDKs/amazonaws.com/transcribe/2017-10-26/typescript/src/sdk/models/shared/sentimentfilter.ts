import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { SentimentValueEnum } from "./sentimentvalueenum";



// SentimentFilter
/** 
 * An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
**/
export class SentimentFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Negate" })
  negate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Sentiments" })
  sentiments: SentimentValueEnum[];
}
