import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowTemplateFilterNameEnum } from "./flowtemplatefilternameenum";
/**
 * An object that filters a workflow search.
**/
export declare class FlowTemplateFilter extends SpeakeasyBase {
    name: FlowTemplateFilterNameEnum;
    value: string[];
}
