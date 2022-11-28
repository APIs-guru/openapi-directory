import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetricFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    IsMissing = "IS_MISSING"
}


// MetricFilter
/** 
 * MetricFilter specifies the filter on a metric.
**/
export class MetricFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=not" })
  not?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: MetricFilterOperatorEnum;
}
