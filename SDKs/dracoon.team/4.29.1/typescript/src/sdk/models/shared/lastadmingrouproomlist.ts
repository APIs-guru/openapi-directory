import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastAdminGroupRoom } from "./lastadmingrouproom";



// LastAdminGroupRoomList
/** 
 * List of (last admin group) rooms
**/
export class LastAdminGroupRoomList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: LastAdminGroupRoom })
  items: LastAdminGroupRoom[];
}
