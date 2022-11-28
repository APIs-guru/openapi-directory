import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { SentimentValueEnum } from "./sentimentvalueenum";
/**
 * An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
**/
export declare class SentimentFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    participantRole?: ParticipantRoleEnum;
    relativeTimeRange?: RelativeTimeRange;
    sentiments: SentimentValueEnum[];
}
