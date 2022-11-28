import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventStartCondition } from "./eventstartcondition";
import { SegmentCondition } from "./segmentcondition";



// StartCondition
/** 
 * Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
**/
export class StartCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventStartCondition" })
  eventStartCondition?: EventStartCondition;

  @SpeakeasyMetadata({ data: "json, name=SegmentStartCondition" })
  segmentStartCondition?: SegmentCondition;
}
