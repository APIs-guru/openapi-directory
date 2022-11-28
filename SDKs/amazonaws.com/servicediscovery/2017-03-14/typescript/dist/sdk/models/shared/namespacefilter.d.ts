import { SpeakeasyBase } from "../../../internal/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { NamespaceFilterNameEnum } from "./namespacefilternameenum";
/**
 * A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces.
**/
export declare class NamespaceFilter extends SpeakeasyBase {
    condition?: FilterConditionEnum;
    name: NamespaceFilterNameEnum;
    values: string[];
}
