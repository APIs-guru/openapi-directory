import { SpeakeasyBase } from "../../../internal/utils";
import { ExportFilterNameEnum } from "./exportfilternameenum";
import { ExportFilterOperatorEnum } from "./exportfilteroperatorenum";
/**
 * Filtes the response form the operation
**/
export declare class ExportFilter extends SpeakeasyBase {
    name: ExportFilterNameEnum;
    operator: ExportFilterOperatorEnum;
    values: string[];
}
