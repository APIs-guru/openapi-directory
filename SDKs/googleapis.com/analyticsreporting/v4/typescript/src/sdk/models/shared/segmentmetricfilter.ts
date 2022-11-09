import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SegmentMetricFilterOperatorEnum {
    UnspecifiedOperator = "UNSPECIFIED_OPERATOR"
,    LessThan = "LESS_THAN"
,    GreaterThan = "GREATER_THAN"
,    Equal = "EQUAL"
,    Between = "BETWEEN"
}

export enum SegmentMetricFilterScopeEnum {
    UnspecifiedScope = "UNSPECIFIED_SCOPE"
,    Product = "PRODUCT"
,    Hit = "HIT"
,    Session = "SESSION"
,    User = "USER"
}


// SegmentMetricFilter
/** 
 * Metric filter to be used in a segment filter clause.
**/
export class SegmentMetricFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;

  @Metadata({ data: "json, name=maxComparisonValue" })
  maxComparisonValue?: string;

  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: SegmentMetricFilterOperatorEnum;

  @Metadata({ data: "json, name=scope" })
  scope?: SegmentMetricFilterScopeEnum;
}
