import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateFilterNameEnum } from "./flowtemplatefilternameenum";



// FlowTemplateFilter
/** 
 * An object that filters a workflow search.
**/
export class FlowTemplateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: FlowTemplateFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string[];
}
