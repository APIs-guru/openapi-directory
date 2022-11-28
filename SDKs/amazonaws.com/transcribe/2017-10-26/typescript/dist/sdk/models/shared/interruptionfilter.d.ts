import { SpeakeasyBase } from "../../../internal/utils";
import { AbsoluteTimeRange } from "./absolutetimerange";
import { ParticipantRoleEnum } from "./participantroleenum";
import { RelativeTimeRange } from "./relativetimerange";
/**
 * An object that enables you to configure your category to be applied to call analytics jobs where either the customer or agent was interrupted.
**/
export declare class InterruptionFilter extends SpeakeasyBase {
    absoluteTimeRange?: AbsoluteTimeRange;
    negate?: boolean;
    participantRole?: ParticipantRoleEnum;
    relativeTimeRange?: RelativeTimeRange;
    threshold?: number;
}
