import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Analytics filter expression.
**/
export declare class FilterExpression extends SpeakeasyBase {
    caseSensitive?: boolean;
    expressionValue?: string;
    field?: string;
    fieldIndex?: number;
    kind?: string;
    matchType?: string;
}
