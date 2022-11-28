import { SpeakeasyBase } from "../../../internal/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { ServiceFilterNameEnum } from "./servicefilternameenum";
/**
 * A complex type that lets you specify the namespaces that you want to list services for.
**/
export declare class ServiceFilter extends SpeakeasyBase {
    condition?: FilterConditionEnum;
    name: ServiceFilterNameEnum;
    values: string[];
}
