import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";



// InterruptionFilter
/** 
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
export class InterruptionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Negate" })
  negate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Threshold" })
  threshold?: number;
}
