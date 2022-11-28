import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { NamespaceFilterNameEnum } from "./namespacefilternameenum";



// NamespaceFilter
/** 
 * A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
**/
export class NamespaceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: FilterConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: NamespaceFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
