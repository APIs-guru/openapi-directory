import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}


// ConfigRoomRequest
/** 
 * Request model for configuring a room
**/
export class ConfigRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminGroupIds" })
  adminGroupIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=adminIds" })
  adminIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: number;

  @SpeakeasyMetadata({ data: "json, name=hasActivitiesLog" })
  hasActivitiesLog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasRecycleBin" })
  hasRecycleBin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inheritPermissions" })
  inheritPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptanceEnum;

  @SpeakeasyMetadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=takeOverPermissions" })
  takeOverPermissions?: boolean;
}
