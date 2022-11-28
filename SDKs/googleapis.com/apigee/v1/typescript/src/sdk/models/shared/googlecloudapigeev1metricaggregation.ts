import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudApigeeV1MetricAggregationAggregationEnum {
    AggregationFunctionUnspecified = "AGGREGATION_FUNCTION_UNSPECIFIED",
    Avg = "AVG",
    Sum = "SUM",
    Min = "MIN",
    Max = "MAX",
    CountDistinct = "COUNT_DISTINCT"
}

export enum GoogleCloudApigeeV1MetricAggregationOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// GoogleCloudApigeeV1MetricAggregation
/** 
 * The optionally aggregated metric to query with its ordering.
**/
export class GoogleCloudApigeeV1MetricAggregation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregation" })
  aggregation?: GoogleCloudApigeeV1MetricAggregationAggregationEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: GoogleCloudApigeeV1MetricAggregationOrderEnum;
}
