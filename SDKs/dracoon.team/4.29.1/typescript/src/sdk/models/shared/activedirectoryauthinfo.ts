import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectory } from "./activedirectory";



// ActiveDirectoryAuthInfo
/** 
 * List of Active Directories
**/
export class ActiveDirectoryAuthInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ActiveDirectory })
  items: ActiveDirectory[];
}
