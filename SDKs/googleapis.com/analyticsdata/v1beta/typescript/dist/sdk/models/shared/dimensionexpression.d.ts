import { SpeakeasyBase } from "../../../internal/utils";
import { ConcatenateExpression } from "./concatenateexpression";
import { CaseExpression } from "./caseexpression";
/**
 * Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
**/
export declare class DimensionExpression extends SpeakeasyBase {
    concatenate?: ConcatenateExpression;
    lowerCase?: CaseExpression;
    upperCase?: CaseExpression;
}
