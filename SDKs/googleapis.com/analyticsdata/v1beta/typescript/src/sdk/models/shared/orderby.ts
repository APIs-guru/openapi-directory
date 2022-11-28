import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionOrderBy } from "./dimensionorderby";
import { MetricOrderBy } from "./metricorderby";
import { PivotOrderBy } from "./pivotorderby";



// OrderBy
/** 
 * Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
**/
export class OrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: DimensionOrderBy;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: MetricOrderBy;

  @SpeakeasyMetadata({ data: "json, name=pivot" })
  pivot?: PivotOrderBy;
}
