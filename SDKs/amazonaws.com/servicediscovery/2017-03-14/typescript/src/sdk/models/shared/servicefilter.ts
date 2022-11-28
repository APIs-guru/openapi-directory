import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { ServiceFilterNameEnum } from "./servicefilternameenum";



// ServiceFilter
/** 
 * A complex type that lets you specify the namespaces that you want to list services for.
**/
export class ServiceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: FilterConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: ServiceFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
