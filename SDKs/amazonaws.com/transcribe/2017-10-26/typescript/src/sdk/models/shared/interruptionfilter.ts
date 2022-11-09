import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";


// InterruptionFilter
/** 
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
export class InterruptionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTimeRange" })
  absoluteTimeRange?: AbsoluteTimeRange;

  @Metadata({ data: "json, name=Negate" })
  negate?: boolean;

  @Metadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;

  @Metadata({ data: "json, name=RelativeTimeRange" })
  relativeTimeRange?: RelativeTimeRange;

  @Metadata({ data: "json, name=Threshold" })
  threshold?: number;
}
