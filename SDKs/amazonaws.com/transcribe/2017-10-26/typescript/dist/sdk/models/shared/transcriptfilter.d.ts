import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { TranscriptFilterTypeEnum } from "./transcriptfiltertypeenum";
/**
 * Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
**/
export declare class TranscriptFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    participantRole?: ParticipantRoleEnum;
    relativeTimeRange?: RelativeTimeRange;
    targets: string[];
    transcriptFilterType: TranscriptFilterTypeEnum;
}
