import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderBy } from "./orderby";


export enum PivotMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED",
    Total = "TOTAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM",
    Count = "COUNT"
}


// Pivot
/** 
 * Describes the visible dimension columns and rows in the report response.
**/
export class Pivot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldNames" })
  fieldNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=metricAggregations" })
  metricAggregations?: PivotMetricAggregationsEnum[];

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBys", elemType: OrderBy })
  orderBys?: OrderBy[];
}
