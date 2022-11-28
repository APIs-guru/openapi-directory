import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CohortSpec } from "./cohortspec";
import { DateRange } from "./daterange";
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { Pivot } from "./pivot";



// RunPivotReportRequest
/** 
 * The request to generate a pivot report.
**/
export class RunPivotReportRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=metricFilter" })
  metricFilter?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=pivots", elemType: Pivot })
  pivots?: Pivot[];

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPropertyQuota" })
  returnPropertyQuota?: boolean;
}
