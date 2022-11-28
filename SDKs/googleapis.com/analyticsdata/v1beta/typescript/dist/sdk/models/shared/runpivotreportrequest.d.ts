import { SpeakeasyBase } from "../../../internal/utils";
import { CohortSpec } from "./cohortspec";
import { DateRange } from "./daterange";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { Pivot } from "./pivot";
/**
 * The request to generate a pivot report.
**/
export declare class RunPivotReportRequest extends SpeakeasyBase {
    cohortSpec?: CohortSpec;
    currencyCode?: string;
    dateRanges?: DateRange[];
    dimensionFilter?: FilterExpression;
    dimensions?: Dimension[];
    keepEmptyRows?: boolean;
    metricFilter?: FilterExpression;
    metrics?: Metric[];
    pivots?: Pivot[];
    property?: string;
    returnPropertyQuota?: boolean;
}
