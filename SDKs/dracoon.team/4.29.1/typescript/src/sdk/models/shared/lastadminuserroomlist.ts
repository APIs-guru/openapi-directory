import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LastAdminUserRoom } from "./lastadminuserroom";


// LastAdminUserRoomList
/** 
 * List of (last admin user) rooms
**/
export class LastAdminUserRoomList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.LastAdminUserRoom })
  items: LastAdminUserRoom[];
}
