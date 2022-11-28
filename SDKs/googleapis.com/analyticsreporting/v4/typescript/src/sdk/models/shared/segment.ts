import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicSegment } from "./dynamicsegment";



// Segment
/** 
 * The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.
**/
export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicSegment" })
  dynamicSegment?: DynamicSegment;

  @SpeakeasyMetadata({ data: "json, name=segmentId" })
  segmentId?: string;
}
