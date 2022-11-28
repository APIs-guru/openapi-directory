import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SegmentDimensionFilterOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Regexp = "REGEXP",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Partial = "PARTIAL",
    Exact = "EXACT",
    InList = "IN_LIST",
    NumericLessThan = "NUMERIC_LESS_THAN",
    NumericGreaterThan = "NUMERIC_GREATER_THAN",
    NumericBetween = "NUMERIC_BETWEEN"
}
/**
 * Dimension filter specifies the filtering options on a dimension.
**/
export declare class SegmentDimensionFilter extends SpeakeasyBase {
    caseSensitive?: boolean;
    dimensionName?: string;
    expressions?: string[];
    maxComparisonValue?: string;
    minComparisonValue?: string;
    operator?: SegmentDimensionFilterOperatorEnum;
}
