import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentFilter } from "./segmentfilter";



// SegmentDefinition
/** 
 * SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.
**/
export class SegmentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=segmentFilters", elemType: SegmentFilter })
  segmentFilters?: SegmentFilter[];
}
