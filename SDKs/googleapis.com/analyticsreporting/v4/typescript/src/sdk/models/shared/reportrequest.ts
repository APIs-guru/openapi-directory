import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    SamplingUnspecified = "SAMPLING_UNSPECIFIED"
,    Default = "DEFAULT"
,    Small = "SMALL"
,    Large = "LARGE"
}


// ReportRequest
/** 
 * The main request class which specifies the Reporting API request.
**/
export class ReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cohortGroup" })
  cohortGroup?: CohortGroup;

  @Metadata({ data: "json, name=dateRanges", elemType: shared.DateRange })
  dateRanges?: DateRange[];

  @Metadata({ data: "json, name=dimensionFilterClauses", elemType: shared.DimensionFilterClause })
  dimensionFilterClauses?: DimensionFilterClause[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=filtersExpression" })
  filtersExpression?: string;

  @Metadata({ data: "json, name=hideTotals" })
  hideTotals?: boolean;

  @Metadata({ data: "json, name=hideValueRanges" })
  hideValueRanges?: boolean;

  @Metadata({ data: "json, name=includeEmptyRows" })
  includeEmptyRows?: boolean;

  @Metadata({ data: "json, name=metricFilterClauses", elemType: shared.MetricFilterClause })
  metricFilterClauses?: MetricFilterClause[];

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=orderBys", elemType: shared.OrderBy })
  orderBys?: OrderBy[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=pivots", elemType: shared.Pivot })
  pivots?: Pivot[];

  @Metadata({ data: "json, name=samplingLevel" })
  samplingLevel?: ReportRequestSamplingLevelEnum;

  @Metadata({ data: "json, name=segments", elemType: shared.Segment })
  segments?: Segment[];

  @Metadata({ data: "json, name=viewId" })
  viewId?: string;
}
