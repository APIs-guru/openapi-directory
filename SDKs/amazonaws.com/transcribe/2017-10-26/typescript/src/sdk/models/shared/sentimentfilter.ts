import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { SentimentValueEnum } from "./sentimentvalueenum";


// SentimentFilter
/** 
 * An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
**/
export class SentimentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @Metadata({ data: "json, name=Negate" })
  negate?: boolean;

  @Metadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @Metadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @Metadata({ data: "json, name=Sentiments" })
  sentiments: SentimentValueEnum[];
}
