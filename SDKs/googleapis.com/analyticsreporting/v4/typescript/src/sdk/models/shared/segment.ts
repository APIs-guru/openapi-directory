import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicSegment } from "./dynamicsegment";


// Segment
/** 
 * The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.
**/
export class Segment extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicSegment" })
  dynamicSegment?: DynamicSegment;

  @Metadata({ data: "json, name=segmentId" })
  segmentId?: string;
}
