import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";



// RoomUsersAddBatchRequestItem
/** 
 * Request item model for granting user to the room
**/
export class RoomUsersAddBatchRequestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: NodePermissions;
}
