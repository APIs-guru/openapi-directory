import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SegmentCondition
/** 
 * Specifies a segment to associate with an activity in a journey.
**/
export class SegmentCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId: string;
}
