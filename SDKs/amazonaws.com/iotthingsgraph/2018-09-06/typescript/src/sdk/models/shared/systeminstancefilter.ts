import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemInstanceFilterNameEnum } from "./systeminstancefilternameenum";


// SystemInstanceFilter
/** 
 * An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.
**/
export class SystemInstanceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: SystemInstanceFilterNameEnum;

  @Metadata({ data: "json, name=value" })
  value?: string[];
}
