import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentSequenceStep } from "./segmentsequencestep";


// SequenceSegment
/** 
 * Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
**/
export class SequenceSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstStepShouldMatchFirstHit" })
  firstStepShouldMatchFirstHit?: boolean;

  @Metadata({ data: "json, name=segmentSequenceSteps", elemType: shared.SegmentSequenceStep })
  segmentSequenceSteps?: SegmentSequenceStep[];
}
