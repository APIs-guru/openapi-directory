import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveDirectory } from "./activedirectory";


// ActiveDirectoryAuthInfo
/** 
 * List of Active Directories
**/
export class ActiveDirectoryAuthInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ActiveDirectory })
  items: ActiveDirectory[];
}
