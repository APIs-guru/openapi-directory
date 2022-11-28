import { SpeakeasyBase } from "../../../internal/utils";
import { EventCondition } from "./eventcondition";
import { SegmentCondition } from "./segmentcondition";
import { SegmentDimensions } from "./segmentdimensions";
/**
 * Specifies a condition to evaluate for an activity in a journey.
**/
export declare class SimpleCondition extends SpeakeasyBase {
    eventCondition?: EventCondition;
    segmentCondition?: SegmentCondition;
    segmentDimensions?: SegmentDimensions;
}
