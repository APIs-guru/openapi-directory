import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetricFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED"
,    Equal = "EQUAL"
,    LessThan = "LESS_THAN"
,    GreaterThan = "GREATER_THAN"
,    IsMissing = "IS_MISSING"
}


// MetricFilter
/** 
 * MetricFilter specifies the filter on a metric.
**/
export class MetricFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=not" })
  not?: boolean;

  @Metadata({ data: "json, name=operator" })
  operator?: MetricFilterOperatorEnum;
}
