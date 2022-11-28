import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { OperationFilterNameEnum } from "./operationfilternameenum";



// OperationFilter
/** 
 * A complex type that lets you select the operations that you want to list.
**/
export class OperationFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: FilterConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: OperationFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
