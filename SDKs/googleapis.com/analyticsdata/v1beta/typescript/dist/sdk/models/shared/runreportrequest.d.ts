import { SpeakeasyBase } from "../../../internal/utils";
import { CohortSpec } from "./cohortspec";
import { DateRange } from "./daterange";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { OrderBy } from "./orderby";
export declare enum RunReportRequestMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED",
    Total = "TOTAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM",
    Count = "COUNT"
}
/**
 * The request to generate a report.
**/
export declare class RunReportRequest extends SpeakeasyBase {
    cohortSpec?: CohortSpec;
    currencyCode?: string;
    dateRanges?: DateRange[];
    dimensionFilter?: FilterExpression;
    dimensions?: Dimension[];
    keepEmptyRows?: boolean;
    limit?: string;
    metricAggregations?: RunReportRequestMetricAggregationsEnum[];
    metricFilter?: FilterExpression;
    metrics?: Metric[];
    offset?: string;
    orderBys?: OrderBy[];
    property?: string;
    returnPropertyQuota?: boolean;
}
