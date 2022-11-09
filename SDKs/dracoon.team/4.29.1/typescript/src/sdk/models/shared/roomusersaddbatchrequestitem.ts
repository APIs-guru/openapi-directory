import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePermissions } from "./nodepermissions";


// RoomUsersAddBatchRequestItem
/** 
 * Request item model for granting user to the room
**/
export class RoomUsersAddBatchRequestItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=permissions" })
  permissions: NodePermissions;
}
