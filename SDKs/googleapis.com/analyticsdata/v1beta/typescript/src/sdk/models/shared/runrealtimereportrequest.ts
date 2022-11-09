import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { FilterExpression } from "./filterexpression";
import { Metric } from "./metric";
import { MinuteRange } from "./minuterange";
import { OrderBy } from "./orderby";

export enum RunRealtimeReportRequestMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED"
,    Total = "TOTAL"
,    Minimum = "MINIMUM"
,    Maximum = "MAXIMUM"
,    Count = "COUNT"
}


// RunRealtimeReportRequest
/** 
 * The request to generate a realtime report.
**/
export class RunRealtimeReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: FilterExpression;

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=metricAggregations" })
  metricAggregations?: RunRealtimeReportRequestMetricAggregationsEnum[];

  @Metadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=minuteRanges", elemType: shared.MinuteRange })
  minuteRanges?: MinuteRange[];

  @Metadata({ data: "json, name=orderBys", elemType: shared.OrderBy })
  orderBys?: OrderBy[];

  @Metadata({ data: "json, name=returnPropertyQuota" })
  returnPropertyQuota?: boolean;
}
