import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterConditionEnum } from "./filterconditionenum";
import { OperationFilterNameEnum } from "./operationfilternameenum";
/**
 * A complex type that lets you select the operations that you want to list.
**/
export declare class OperationFilter extends SpeakeasyBase {
    condition?: FilterConditionEnum;
    name: OperationFilterNameEnum;
    values: string[];
}
