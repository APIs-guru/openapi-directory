import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserGroup } from "./usergroup";
import { Range } from "./range";


// UserGroupList
/** 
 * List of groups
**/
export class UserGroupList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserGroup })
  items: UserGroup[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
