import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterExpression } from "./filterexpression";


// FilterExpressionList
/** 
 * A list of filter expressions.
**/
export class FilterExpressionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=expressions", elemType: shared.FilterExpression })
  expressions?: FilterExpression[];
}
