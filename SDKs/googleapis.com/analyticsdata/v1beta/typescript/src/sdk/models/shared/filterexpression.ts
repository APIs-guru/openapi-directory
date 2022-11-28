import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterExpressionList } from "./filterexpressionlist";
import { Filter } from "./filter";



// FilterExpression
/** 
 * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
**/
export class FilterExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=andGroup" })
  andGroup?: FilterExpressionList;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: Filter;

  @SpeakeasyMetadata({ data: "json, name=notExpression" })
  notExpression?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=orGroup" })
  orGroup?: FilterExpressionList;
}
