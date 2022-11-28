import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupUser } from "./groupuser";
import { Range } from "./range";



// GroupUserList
/** 
 * List of users
**/
export class GroupUserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GroupUser })
  items: GroupUser[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
