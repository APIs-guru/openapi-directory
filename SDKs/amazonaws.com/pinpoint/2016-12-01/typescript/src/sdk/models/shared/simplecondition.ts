import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCondition } from "./eventcondition";
import { SegmentCondition } from "./segmentcondition";
import { SegmentDimensions } from "./segmentdimensions";



// SimpleCondition
/** 
 * Specifies a condition to evaluate for an activity in a journey.
**/
export class SimpleCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventCondition" })
  eventCondition?: EventCondition;

  @SpeakeasyMetadata({ data: "json, name=SegmentCondition" })
  segmentCondition?: SegmentCondition;

  @SpeakeasyMetadata({ data: "json, name=SegmentDimensions" })
  segmentDimensions?: SegmentDimensions;
}
