import { SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { MinuteRange } from "./minuterange";
import { OrderBy } from "./orderby";
export declare enum RunRealtimeReportRequestMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED",
    Total = "TOTAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM",
    Count = "COUNT"
}
/**
 * The request to generate a realtime report.
**/
export declare class RunRealtimeReportRequest extends SpeakeasyBase {
    dimensionFilter?: FilterExpression;
    dimensions?: Dimension[];
    limit?: string;
    metricAggregations?: RunRealtimeReportRequestMetricAggregationsEnum[];
    metricFilter?: FilterExpression;
    metrics?: Metric[];
    minuteRanges?: MinuteRange[];
    orderBys?: OrderBy[];
    returnPropertyQuota?: boolean;
}
