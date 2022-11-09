import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { OperationFilterNameEnum } from "./operationfilternameenum";


// OperationFilter
/** 
 * A complex type that lets you select the operations that you want to list.
**/
export class OperationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: FilterConditionEnum;

  @Metadata({ data: "json, name=Name" })
  name: OperationFilterNameEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
