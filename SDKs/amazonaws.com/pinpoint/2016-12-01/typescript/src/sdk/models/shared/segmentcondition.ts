import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SegmentCondition
/** 
 * Specifies a segment to associate with an activity in a journey.
**/
export class SegmentCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=SegmentId" })
  segmentId: string;
}
