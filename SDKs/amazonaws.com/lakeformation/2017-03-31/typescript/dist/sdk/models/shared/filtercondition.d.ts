import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { FieldNameStringEnum } from "./fieldnamestringenum";
/**
 * This structure describes the filtering of columns in a table based on a filter condition.
**/
export declare class FilterCondition extends SpeakeasyBase {
    comparisonOperator?: ComparisonOperatorEnum;
    field?: FieldNameStringEnum;
    stringValueList?: string[];
}
