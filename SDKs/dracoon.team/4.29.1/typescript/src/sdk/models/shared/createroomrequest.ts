import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateRoomRequestNewGroupMemberAcceptanceEnum {
    Autoallow = "autoallow",
    Pending = "pending"
}


// CreateRoomRequest
/** 
 * Request model for creating a room
**/
export class CreateRoomRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=newGroupMemberAcceptance" })
  newGroupMemberAcceptance?: CreateRoomRequestNewGroupMemberAcceptanceEnum;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: number;

  @SpeakeasyMetadata({ data: "json, name=recycleBinRetentionPeriod" })
  recycleBinRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=timestampCreation" })
  timestampCreation?: Date;

  @SpeakeasyMetadata({ data: "json, name=timestampModification" })
  timestampModification?: Date;
}
