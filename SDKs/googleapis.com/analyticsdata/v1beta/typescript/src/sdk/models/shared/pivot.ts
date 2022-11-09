import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderBy } from "./orderby";

export enum PivotMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED"
,    Total = "TOTAL"
,    Minimum = "MINIMUM"
,    Maximum = "MAXIMUM"
,    Count = "COUNT"
}


// Pivot
/** 
 * Describes the visible dimension columns and rows in the report response.
**/
export class Pivot extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldNames" })
  fieldNames?: string[];

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=metricAggregations" })
  metricAggregations?: PivotMetricAggregationsEnum[];

  @Metadata({ data: "json, name=offset" })
  offset?: string;

  @Metadata({ data: "json, name=orderBys", elemType: shared.OrderBy })
  orderBys?: OrderBy[];
}
