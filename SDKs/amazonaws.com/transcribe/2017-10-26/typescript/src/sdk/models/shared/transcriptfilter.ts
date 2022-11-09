import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { TranscriptFilterTypeEnum } from "./transcriptfiltertypeenum";


// TranscriptFilter
/** 
 * Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
**/
export class TranscriptFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @Metadata({ data: "json, name=Negate" })
  negate?: boolean;

  @Metadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @Metadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @Metadata({ data: "json, name=Targets" })
  targets: string[];

  @Metadata({ data: "json, name=TranscriptFilterType" })
  transcriptFilterType: TranscriptFilterTypeEnum;
}
