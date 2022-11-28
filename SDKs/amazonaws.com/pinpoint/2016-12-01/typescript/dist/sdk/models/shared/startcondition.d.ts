import { SpeakeasyBase } from "../../../internal/utils";
import { EventStartCondition } from "./eventstartcondition";
import { SegmentCondition } from "./segmentcondition";
/**
 * Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
**/
export declare class StartCondition extends SpeakeasyBase {
    description?: string;
    eventStartCondition?: EventStartCondition;
    segmentStartCondition?: SegmentCondition;
}
