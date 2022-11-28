import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";



// EventStartCondition
/** 
 * Specifies the settings for an event that causes a journey activity to start.
**/
export class EventStartCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventFilter" })
  eventFilter?: EventFilter;

  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId?: string;
}
