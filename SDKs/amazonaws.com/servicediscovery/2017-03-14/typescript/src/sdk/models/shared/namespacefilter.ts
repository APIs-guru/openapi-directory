import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { NamespaceFilterNameEnum } from "./namespacefilternameenum";


// NamespaceFilter
/** 
 * A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
**/
export class NamespaceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: FilterConditionEnum;

  @Metadata({ data: "json, name=Name" })
  name: NamespaceFilterNameEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
