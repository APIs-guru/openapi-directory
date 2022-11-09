import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionOrderBy } from "./dimensionorderby";
import { MetricOrderBy } from "./metricorderby";
import { PivotOrderBy } from "./pivotorderby";


// OrderBy
/** 
 * Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
**/
export class OrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=desc" })
  desc?: boolean;

  @Metadata({ data: "json, name=dimension" })
  dimension?: DimensionOrderBy;

  @Metadata({ data: "json, name=metric" })
  metric?: MetricOrderBy;

  @Metadata({ data: "json, name=pivot" })
  pivot?: PivotOrderBy;
}
