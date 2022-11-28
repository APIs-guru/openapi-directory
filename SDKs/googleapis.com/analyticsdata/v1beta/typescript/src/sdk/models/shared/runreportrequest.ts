import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CohortSpec } from "./cohortspec";
import { DateRange } from "./daterange";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { OrderBy } from "./orderby";


export enum RunReportRequestMetricAggregationsEnum {
    MetricAggregationUnspecified = "METRIC_AGGREGATION_UNSPECIFIED",
    Total = "TOTAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM",
    Count = "COUNT"
}


// RunReportRequest
/** 
 * The request to generate a report.
**/
export class RunReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cohortSpec" })
  cohortSpec?: CohortSpec;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dateRanges", elemType: DateRange })
  dateRanges?: DateRange[];

  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=keepEmptyRows" })
  keepEmptyRows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=metricAggregations" })
  metricAggregations?: RunReportRequestMetricAggregationsEnum[];

  @SpeakeasyMetadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBys", elemType: OrderBy })
  orderBys?: OrderBy[];

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPropertyQuota" })
  returnPropertyQuota?: boolean;
}
