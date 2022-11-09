import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LastAdminGroupRoom } from "./lastadmingrouproom";


// LastAdminGroupRoomList
/** 
 * List of (last admin group) rooms
**/
export class LastAdminGroupRoomList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.LastAdminGroupRoom })
  items: LastAdminGroupRoom[];
}
