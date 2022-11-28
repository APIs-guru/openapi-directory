import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SegmentMetricFilterOperatorEnum {
    UnspecifiedOperator = "UNSPECIFIED_OPERATOR",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    Equal = "EQUAL",
    Between = "BETWEEN"
}
export declare enum SegmentMetricFilterScopeEnum {
    UnspecifiedScope = "UNSPECIFIED_SCOPE",
    Product = "PRODUCT",
    Hit = "HIT",
    Session = "SESSION",
    User = "USER"
}
/**
 * Metric filter to be used in a segment filter clause.
**/
export declare class SegmentMetricFilter extends SpeakeasyBase {
    comparisonValue?: string;
    maxComparisonValue?: string;
    metricName?: string;
    operator?: SegmentMetricFilterOperatorEnum;
    scope?: SegmentMetricFilterScopeEnum;
}
