import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
import { TranscriptFilterTypeEnum } from "./transcriptfiltertypeenum";



// TranscriptFilter
/** 
 * Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
**/
export class TranscriptFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Negate" })
  negate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Targets" })
  targets: string[];

  @SpeakeasyMetadata({ data: "json, name=TranscriptFilterType" })
  transcriptFilterType: TranscriptFilterTypeEnum;
}
