import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemTemplateFilterNameEnum } from "./systemtemplatefilternameenum";



// SystemTemplateFilter
/** 
 * An object that filters a system search.
**/
export class SystemTemplateFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: SystemTemplateFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string[];
}
