import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { ServiceFilterNameEnum } from "./servicefilternameenum";


// ServiceFilter
/** 
 * A complex type that lets you specify the namespaces that you want to list services for.
**/
export class ServiceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: FilterConditionEnum;

  @Metadata({ data: "json, name=Name" })
  name: ServiceFilterNameEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
