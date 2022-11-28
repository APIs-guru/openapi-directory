import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentSequenceStep } from "./segmentsequencestep";



// SequenceSegment
/** 
 * Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
**/
export class SequenceSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstStepShouldMatchFirstHit" })
  firstStepShouldMatchFirstHit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segmentSequenceSteps", elemType: SegmentSequenceStep })
  segmentSequenceSteps?: SegmentSequenceStep[];
}
