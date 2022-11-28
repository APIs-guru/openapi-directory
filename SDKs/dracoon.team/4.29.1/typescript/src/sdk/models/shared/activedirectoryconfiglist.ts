import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryConfig } from "./activedirectoryconfig";



// ActiveDirectoryConfigList
/** 
 * List of Active Directory configurations
**/
export class ActiveDirectoryConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ActiveDirectoryConfig })
  items: ActiveDirectoryConfig[];
}
