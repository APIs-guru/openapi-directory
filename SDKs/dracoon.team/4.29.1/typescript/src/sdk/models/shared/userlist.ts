import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserItem } from "./useritem";
import { Range } from "./range";



// UserList
/** 
 * List of users
**/
export class UserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserItem })
  items: UserItem[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
