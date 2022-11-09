import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentDimensionFilter } from "./segmentdimensionfilter";
import { SegmentMetricFilter } from "./segmentmetricfilter";


// SegmentFilterClause
/** 
 * Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
**/
export class SegmentFilterClause extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: SegmentDimensionFilter;

  @Metadata({ data: "json, name=metricFilter" })
  metricFilter?: SegmentMetricFilter;

  @Metadata({ data: "json, name=not" })
  not?: boolean;
}
