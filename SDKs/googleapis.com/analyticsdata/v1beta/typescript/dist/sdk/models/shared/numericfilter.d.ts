import { SpeakeasyBase } from "../../../internal/utils";
import { NumericValue } from "./numericvalue";
export declare enum NumericFilterOperationEnum {
    OperationUnspecified = "OPERATION_UNSPECIFIED",
    Equal = "EQUAL",
    LessThan = "LESS_THAN",
    LessThanOrEqual = "LESS_THAN_OR_EQUAL",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqual = "GREATER_THAN_OR_EQUAL"
}
/**
 * Filters for numeric or date values.
**/
export declare class NumericFilter extends SpeakeasyBase {
    operation?: NumericFilterOperationEnum;
    value?: NumericValue;
}
