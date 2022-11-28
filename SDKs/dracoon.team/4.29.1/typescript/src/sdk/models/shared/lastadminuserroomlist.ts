import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastAdminUserRoom } from "./lastadminuserroom";



// LastAdminUserRoomList
/** 
 * List of (last admin user) rooms
**/
export class LastAdminUserRoomList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: LastAdminUserRoom })
  items: LastAdminUserRoom[];
}
