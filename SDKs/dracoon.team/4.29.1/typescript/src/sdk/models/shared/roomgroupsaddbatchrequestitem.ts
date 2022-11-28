import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";


export enum RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}


// RoomGroupsAddBatchRequestItem
/** 
 * Request item model for granting group to the room
**/
export class RoomGroupsAddBatchRequestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: NodePermissions;
}
