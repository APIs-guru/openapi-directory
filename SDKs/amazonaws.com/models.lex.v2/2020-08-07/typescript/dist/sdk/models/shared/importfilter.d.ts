import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFilterNameEnum } from "./importfilternameenum";
import { ImportFilterOperatorEnum } from "./importfilteroperatorenum";
/**
 * Filters the response from the operation.
**/
export declare class ImportFilter extends SpeakeasyBase {
    name: ImportFilterNameEnum;
    operator: ImportFilterOperatorEnum;
    values: string[];
}
