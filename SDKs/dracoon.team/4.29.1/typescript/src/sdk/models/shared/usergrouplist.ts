import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGroup } from "./usergroup";
import { Range } from "./range";



// UserGroupList
/** 
 * List of groups
**/
export class UserGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserGroup })
  items: UserGroup[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
