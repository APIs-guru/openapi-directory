import { SpeakeasyBase } from "../../../internal/utils";
import { MetricFilter } from "./metricfilter";
export declare enum MetricFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Or = "OR",
    And = "AND"
}
/**
 * Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.
**/
export declare class MetricFilterClause extends SpeakeasyBase {
    filters?: MetricFilter[];
    operator?: MetricFilterClauseOperatorEnum;
}
