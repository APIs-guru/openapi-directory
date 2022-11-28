import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricFilter } from "./metricfilter";


export enum MetricFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Or = "OR",
    And = "AND"
}


// MetricFilterClause
/** 
 * Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
**/
export class MetricFilterClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: MetricFilter })
  filters?: MetricFilter[];

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: MetricFilterClauseOperatorEnum;
}
