import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowTemplateFilterNameEnum } from "./flowtemplatefilternameenum";


// FlowTemplateFilter
/** 
 * An object that filters a workflow search.
**/
export class FlowTemplateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: FlowTemplateFilterNameEnum;

  @Metadata({ data: "json, name=value" })
  value: string[];
}
