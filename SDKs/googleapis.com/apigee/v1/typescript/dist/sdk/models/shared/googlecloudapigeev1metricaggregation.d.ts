import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudApigeeV1MetricAggregationAggregationEnum {
    AggregationFunctionUnspecified = "AGGREGATION_FUNCTION_UNSPECIFIED",
    Avg = "AVG",
    Sum = "SUM",
    Min = "MIN",
    Max = "MAX",
    CountDistinct = "COUNT_DISTINCT"
}
export declare enum GoogleCloudApigeeV1MetricAggregationOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * The optionally aggregated metric to query with its ordering.
**/
export declare class GoogleCloudApigeeV1MetricAggregation extends SpeakeasyBase {
    aggregation?: GoogleCloudApigeeV1MetricAggregationAggregationEnum;
    name?: string;
    order?: GoogleCloudApigeeV1MetricAggregationOrderEnum;
}
