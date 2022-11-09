import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePermissions } from "./nodepermissions";

export enum RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow"
,    Pending = "pending"
}


// RoomGroupsAddBatchRequestItem
/** 
 * Request item model for granting group to the room
**/
export class RoomGroupsAddBatchRequestItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum;

  @Metadata({ data: "json, name=permissions" })
  permissions: NodePermissions;
}
