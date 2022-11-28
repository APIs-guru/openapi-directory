import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    GreaterThan = "GREATER_THAN",
    IsMissing = "IS_MISSING"
}
/**
 * MetricFilter specifies the filter on a metric.
**/
export declare class MetricFilter extends SpeakeasyBase {
    comparisonValue?: string;
    metricName?: string;
    not?: boolean;
    operator?: MetricFilterOperatorEnum;
}
