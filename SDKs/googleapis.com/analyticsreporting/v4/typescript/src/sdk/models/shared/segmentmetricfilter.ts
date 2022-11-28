import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SegmentMetricFilterOperatorEnum {
    UnspecifiedOperator = "UNSPECIFIED_OPERATOR",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    Equal = "EQUAL",
    Between = "BETWEEN"
}

export enum SegmentMetricFilterScopeEnum {
    UnspecifiedScope = "UNSPECIFIED_SCOPE",
    Product = "PRODUCT",
    Hit = "HIT",
    Session = "SESSION",
    User = "USER"
}


// SegmentMetricFilter
/** 
 * Metric filter to be used in a segment filter clause.
**/
export class SegmentMetricFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonValue" })
  comparisonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=maxComparisonValue" })
  maxComparisonValue?: string;

  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: SegmentMetricFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: SegmentMetricFilterScopeEnum;
}
