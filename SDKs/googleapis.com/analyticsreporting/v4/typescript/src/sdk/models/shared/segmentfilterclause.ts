import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensionFilter } from "./segmentdimensionfilter";
import { SegmentMetricFilter } from "./segmentmetricfilter";



// SegmentFilterClause
/** 
 * Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
**/
export class SegmentFilterClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: SegmentDimensionFilter;

  @SpeakeasyMetadata({ data: "json, name=metricFilter" })
  metricFilter?: SegmentMetricFilter;

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: boolean;
}
