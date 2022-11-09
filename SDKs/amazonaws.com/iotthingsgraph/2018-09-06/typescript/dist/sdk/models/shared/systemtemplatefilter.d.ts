import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateFilterNameEnum } from "./systemtemplatefilternameenum";
/**
 * An object that filters a system search.
**/
export declare class SystemTemplateFilter extends SpeakeasyBase {
    name: SystemTemplateFilterNameEnum;
    value: string[];
}
