import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow"
,    Pending = "pending"
}


// CreateRoomRequest
/** 
 * Request model for creating a room
**/
export class CreateRoomRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: CreateRoomRequestNewGroupMemberAcceptanceEnum;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=quota" })
  quota?: number;

  @Metadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod?: number;

  @Metadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @Metadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
