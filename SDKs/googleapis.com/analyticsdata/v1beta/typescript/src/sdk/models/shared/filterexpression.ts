import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterExpressionList } from "./filterexpressionlist";
import { Filter } from "./filter";
import { FilterExpression } from "./filterexpression";
import { FilterExpressionList } from "./filterexpressionlist";


// FilterExpression
/** 
 * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
**/
export class FilterExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=andGroup" })
  andGroup?: FilterExpressionList;

  @Metadata({ data: "json, name=filter" })
  filter?: Filter;

  @Metadata({ data: "json, name=notExpression" })
  notExpression?: FilterExpression;

  @Metadata({ data: "json, name=orGroup" })
  orGroup?: FilterExpressionList;
}
