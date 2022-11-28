import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CohortGroup } from "./cohortgroup";
import { DateRange } from "./daterange";
import { DimensionFilterClause } from "./dimensionfilterclause";
import { Dimension } from "./dimension";
import { MetricFilterClause } from "./metricfilterclause";
import { Metric } from "./metric";
import { OrderBy } from "./orderby";
import { Pivot } from "./pivot";
import { Segment } from "./segment";


export enum ReportRequestSamplingLevelEnum {
    SamplingUnspecified = "SAMPLING_UNSPECIFIED",
    Default = "DEFAULT",
    Small = "SMALL",
    Large = "LARGE"
}


// ReportRequest
/** 
 * The main request class which specifies the Reporting API request.
**/
export class ReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cohortGroup" })
  cohortGroup?: CohortGroup;

  @SpeakeasyMetadata({ data: "json, name=dateRanges", elemType: DateRange })
  dateRanges?: DateRange[];

  @SpeakeasyMetadata({ data: "json, name=dimensionFilterClauses", elemType: DimensionFilterClause })
  dimensionFilterClauses?: DimensionFilterClause[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=filtersExpression" })
  filtersExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=hideTotals" })
  hideTotals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideValueRanges" })
  hideValueRanges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeEmptyRows" })
  includeEmptyRows?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metricFilterClauses", elemType: MetricFilterClause })
  metricFilterClauses?: MetricFilterClause[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=orderBys", elemType: OrderBy })
  orderBys?: OrderBy[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pivots", elemType: Pivot })
  pivots?: Pivot[];

  @SpeakeasyMetadata({ data: "json, name=samplingLevel" })
  samplingLevel?: ReportRequestSamplingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=segments", elemType: Segment })
  segments?: Segment[];

  @SpeakeasyMetadata({ data: "json, name=viewId" })
  viewId?: string;
}
