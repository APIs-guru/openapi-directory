import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentFilterClause } from "./segmentfilterclause";



// OrFiltersForSegment
/** 
 * A list of segment filters in the `OR` group are combined with the logical OR operator.
**/
export class OrFiltersForSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=segmentFilterClauses", elemType: SegmentFilterClause })
  segmentFilterClauses?: SegmentFilterClause[];
}
