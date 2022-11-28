import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";


export enum RoomGroupNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}


// RoomGroup
/** 
 * Group information
**/
export class RoomGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isGranted" })
  isGranted: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: RoomGroupNewGroupMemberAcceptanceEnum;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;
}
