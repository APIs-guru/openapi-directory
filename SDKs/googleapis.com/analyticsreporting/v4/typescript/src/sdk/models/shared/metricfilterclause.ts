import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricFilter } from "./metricfilter";

export enum MetricFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    Or = "OR"
,    And = "AND"
}


// MetricFilterClause
/** 
 * Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
**/
export class MetricFilterClause extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.MetricFilter })
  filters?: MetricFilter[];

  @Metadata({ data: "json, name=operator" })
  operator?: MetricFilterClauseOperatorEnum;
}
