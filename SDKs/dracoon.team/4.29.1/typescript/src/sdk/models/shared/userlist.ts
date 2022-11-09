import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserItem } from "./useritem";
import { Range } from "./range";


// UserList
/** 
 * List of users
**/
export class UserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserItem })
  items: UserItem[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
