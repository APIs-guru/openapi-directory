import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentFilterClause } from "./segmentfilterclause";


// OrFiltersForSegment
/** 
 * A list of segment filters in the `OR` group are combined with the logical OR operator.
**/
export class OrFiltersForSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=segmentFilterClauses", elemType: shared.SegmentFilterClause })
  segmentFilterClauses?: SegmentFilterClause[];
}
