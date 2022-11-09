import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupUser } from "./groupuser";
import { Range } from "./range";


// GroupUserList
/** 
 * List of users
**/
export class GroupUserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GroupUser })
  items: GroupUser[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
