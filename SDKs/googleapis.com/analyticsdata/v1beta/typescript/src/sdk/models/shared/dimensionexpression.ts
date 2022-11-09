import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConcatenateExpression } from "./concatenateexpression";
import { CaseExpression } from "./caseexpression";
import { CaseExpression } from "./caseexpression";


// DimensionExpression
/** 
 * Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
**/
export class DimensionExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=concatenate" })
  concatenate?: ConcatenateExpression;

  @Metadata({ data: "json, name=lowerCase" })
  lowerCase?: CaseExpression;

  @Metadata({ data: "json, name=upperCase" })
  upperCase?: CaseExpression;
}
