import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConcatenateExpression } from "./concatenateexpression";
import { CaseExpression } from "./caseexpression";



// DimensionExpression
/** 
 * Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
**/
export class DimensionExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concatenate" })
  concatenate?: ConcatenateExpression;

  @SpeakeasyMetadata({ data: "json, name=lowerCase" })
  lowerCase?: CaseExpression;

  @SpeakeasyMetadata({ data: "json, name=upperCase" })
  upperCase?: CaseExpression;
}
