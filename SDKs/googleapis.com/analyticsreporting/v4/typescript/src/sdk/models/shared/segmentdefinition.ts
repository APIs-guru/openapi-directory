import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentFilter } from "./segmentfilter";


// SegmentDefinition
/** 
 * SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
**/
export class SegmentDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=segmentFilters", elemType: shared.SegmentFilter })
  segmentFilters?: SegmentFilter[];
}
