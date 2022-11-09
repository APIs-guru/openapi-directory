import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConfigRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow"
,    Pending = "pending"
}


// ConfigRoomRequest
/** 
 * Request model for configuring a room
**/
export class ConfigRoomRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminGroupIds" })
  adminGroupIds?: number[];

  @Metadata({ data: "json, name=adminIds" })
  adminIds?: number[];

  @Metadata({ data: "json, name=classification" })
  classification?: number;

  @Metadata({ data: "json, name=hasActivitiesLog" })
  hasActivitiesLog?: boolean;

  @Metadata({ data: "json, name=hasRecycleBin" })
  hasRecycleBin?: boolean;

  @Metadata({ data: "json, name=inheritPermissions" })
  inheritPermissions?: boolean;

  @Metadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptanceEnum;

  @Metadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod?: number;

  @Metadata({ data: "json, name=takeOverPermissions" })
  takeOverPermissions?: boolean;
}
