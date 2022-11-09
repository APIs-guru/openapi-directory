import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CohortSpec } from "./cohortspec";
import { DateRange } from "./daterange";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { FilterExpression } from "./filterexpression";
import { Metric } from "./metric";
import { Pivot } from "./pivot";


// RunPivotReportRequest
/** 
 * The request to generate a pivot report.
**/
export class RunPivotReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cohortSpec" })
  cohortSpec?: CohortSpec;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=dateRanges", elemType: shared.DateRange })
  dateRanges?: DateRange[];

  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: FilterExpression;

  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=keepEmptyRows" })
  keepEmptyRows?: boolean;

  @Metadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=pivots", elemType: shared.Pivot })
  pivots?: Pivot[];

  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=returnPropertyQuota" })
  returnPropertyQuota?: boolean;
}
