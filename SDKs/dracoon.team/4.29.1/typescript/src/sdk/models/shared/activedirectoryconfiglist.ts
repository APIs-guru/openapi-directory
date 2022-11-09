import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveDirectoryConfig } from "./activedirectoryconfig";


// ActiveDirectoryConfigList
/** 
 * List of Active Directory configurations
**/
export class ActiveDirectoryConfigList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ActiveDirectoryConfig })
  items: ActiveDirectoryConfig[];
}
