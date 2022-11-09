import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePermissions } from "./nodepermissions";

export enum RoomGroupNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow"
,    Pending = "pending"
}


// RoomGroup
/** 
 * Group information
**/
export class RoomGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isGranted" })
  isGranted: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: RoomGroupNewGroupMemberAcceptanceEnum;

  @Metadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;
}
