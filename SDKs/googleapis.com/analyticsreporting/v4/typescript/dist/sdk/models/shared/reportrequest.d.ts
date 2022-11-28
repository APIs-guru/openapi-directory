import { SpeakeasyBase } from "../../../internal/utils";
import { CohortGroup } from "./cohortgroup";
import { DateRange } from "./daterange";
import { DimensionFilterClause } from "./dimensionfilterclause";
import { Dimension } from "./dimension";
import { MetricFilterClause } from "./metricfilterclause";
import { Metric } from "./metric";
import { OrderBy } from "./orderby";
import { Pivot } from "./pivot";
import { Segment } from "./segment";
export declare enum ReportRequestSamplingLevelEnum {
    SamplingUnspecified = "SAMPLING_UNSPECIFIED",
    Default = "DEFAULT",
    Small = "SMALL",
    Large = "LARGE"
}
/**
 * The main request class which specifies the Reporting API request.
**/
export declare class ReportRequest extends SpeakeasyBase {
    cohortGroup?: CohortGroup;
    dateRanges?: DateRange[];
    dimensionFilterClauses?: DimensionFilterClause[];
    dimensions?: Dimension[];
    filtersExpression?: string;
    hideTotals?: boolean;
    hideValueRanges?: boolean;
    includeEmptyRows?: boolean;
    metricFilterClauses?: MetricFilterClause[];
    metrics?: Metric[];
    orderBys?: OrderBy[];
    pageSize?: number;
    pageToken?: string;
    pivots?: Pivot[];
    samplingLevel?: ReportRequestSamplingLevelEnum;
    segments?: Segment[];
    viewId?: string;
}
