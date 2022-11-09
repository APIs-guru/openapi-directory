import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudApigeeV1MetricAggregationAggregationEnum {
    AggregationFunctionUnspecified = "AGGREGATION_FUNCTION_UNSPECIFIED"
,    Avg = "AVG"
,    Sum = "SUM"
,    Min = "MIN"
,    Max = "MAX"
,    CountDistinct = "COUNT_DISTINCT"
}

export enum GoogleCloudApigeeV1MetricAggregationOrderEnum {
    OrderUnspecified = "ORDER_UNSPECIFIED"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// GoogleCloudApigeeV1MetricAggregation
/** 
 * The optionally aggregated metric to query with its ordering.
**/
export class GoogleCloudApigeeV1MetricAggregation extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregation" })
  aggregation?: GoogleCloudApigeeV1MetricAggregationAggregationEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=order" })
  order?: GoogleCloudApigeeV1MetricAggregationOrderEnum;
}
