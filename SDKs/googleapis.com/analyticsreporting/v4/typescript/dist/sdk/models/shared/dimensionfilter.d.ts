import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Regexp = "REGEXP",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Partial = "PARTIAL",
    Exact = "EXACT",
    NumericEqual = "NUMERIC_EQUAL",
    NumericGreaterThan = "NUMERIC_GREATER_THAN",
    NumericLessThan = "NUMERIC_LESS_THAN",
    InList = "IN_LIST"
}
/**
 * Dimension filter specifies the filtering options on a dimension.
**/
export declare class DimensionFilter extends SpeakeasyBase {
    caseSensitive?: boolean;
    dimensionName?: string;
    expressions?: string[];
    not?: boolean;
    operator?: DimensionFilterOperatorEnum;
}
