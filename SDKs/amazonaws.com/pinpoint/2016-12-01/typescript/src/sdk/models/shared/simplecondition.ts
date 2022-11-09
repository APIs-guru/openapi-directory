import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventCondition } from "./eventcondition";
import { SegmentCondition } from "./segmentcondition";
import { SegmentDimensions } from "./segmentdimensions";


// SimpleCondition
/** 
 * Specifies a condition to evaluate for an activity in a journey.
**/
export class SimpleCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventCondition" })
  eventCondition?: EventCondition;

  @Metadata({ data: "json, name=SegmentCondition" })
  segmentCondition?: SegmentCondition;

  @Metadata({ data: "json, name=SegmentDimensions" })
  segmentDimensions?: SegmentDimensions;
}
