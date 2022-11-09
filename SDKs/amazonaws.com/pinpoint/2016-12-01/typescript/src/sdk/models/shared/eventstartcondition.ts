import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventFilter } from "./eventfilter";


// EventStartCondition
/** 
 * Specifies the settings for an event that causes a journey activity to start.
**/
export class EventStartCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventFilter" })
  eventFilter?: EventFilter;

  @Metadata({ data: "json, name=SegmentId" })
  segmentId?: string;
}
