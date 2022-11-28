import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { MinuteRange } from "./minuterange";
import { OrderBy } from "./orderby";


export enum RunRealtimeReportRequestMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED",
    Total = "TOTAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM",
    Count = "COUNT"
}


// RunRealtimeReportRequest
/** 
 * The request to generate a realtime report.
**/
export class RunRealtimeReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=metricAggregations" })
  metricAggregations?: RunRealtimeReportRequestMetricAggregationsEnum[];

  @SpeakeasyMetadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=minuteRanges", elemType: MinuteRange })
  minuteRanges?: MinuteRange[];

  @SpeakeasyMetadata({ data: "json, name=orderBys", elemType: OrderBy })
  orderBys?: OrderBy[];

  @SpeakeasyMetadata({ data: "json, name=returnPropertyQuota" })
  returnPropertyQuota?: boolean;
}
