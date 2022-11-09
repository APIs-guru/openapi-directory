import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomUser } from "./roomuser";
import { Range } from "./range";


// RoomUserList
/** 
 * List of users
**/
export class RoomUserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomUser })
  items: RoomUser[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
