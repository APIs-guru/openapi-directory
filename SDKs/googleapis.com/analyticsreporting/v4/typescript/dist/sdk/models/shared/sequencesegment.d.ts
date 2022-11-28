import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentSequenceStep } from "./segmentsequencestep";
/**
 * Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
**/
export declare class SequenceSegment extends SpeakeasyBase {
    firstStepShouldMatchFirstHit?: boolean;
    segmentSequenceSteps?: SegmentSequenceStep[];
}
