import { SpeakeasyBase } from "../../../internal/utils";
import { OrderBy } from "./orderby";
export declare enum PivotMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED",
    Total = "TOTAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM",
    Count = "COUNT"
}
/**
 * Describes the visible dimension columns and rows in the report response.
**/
export declare class Pivot extends SpeakeasyBase {
    fieldNames?: string[];
    limit?: string;
    metricAggregations?: PivotMetricAggregationsEnum[];
    offset?: string;
    orderBys?: OrderBy[];
}
