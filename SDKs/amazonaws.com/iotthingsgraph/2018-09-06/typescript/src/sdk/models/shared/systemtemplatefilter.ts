import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemTemplateFilterNameEnum } from "./systemtemplatefilternameenum";


// SystemTemplateFilter
/** 
 * An object that filters a system search.
**/
export class SystemTemplateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: SystemTemplateFilterNameEnum;

  @Metadata({ data: "json, name=value" })
  value: string[];
}
