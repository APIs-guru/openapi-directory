import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensionFilter } from "./segmentdimensionfilter";
import { SegmentMetricFilter } from "./segmentmetricfilter";
/**
 * Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
**/
export declare class SegmentFilterClause extends SpeakeasyBase {
    dimensionFilter?: SegmentDimensionFilter;
    metricFilter?: SegmentMetricFilter;
    not?: boolean;
}
