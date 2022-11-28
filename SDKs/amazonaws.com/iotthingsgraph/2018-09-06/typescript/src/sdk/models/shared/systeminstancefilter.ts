import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceFilterNameEnum } from "./systeminstancefilternameenum";



// SystemInstanceFilter
/** 
 * An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.
**/
export class SystemInstanceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: SystemInstanceFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string[];
}
