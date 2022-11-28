import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";



// FilterExpressionList
/** 
 * A list of filter expressions.
**/
export class FilterExpressionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expressions", elemType: FilterExpression })
  expressions?: FilterExpression[];
}
