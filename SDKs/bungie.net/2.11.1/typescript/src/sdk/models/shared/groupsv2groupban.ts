import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";



export class GroupsV2GroupBan extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUserInfo?: UserUserInfoCard;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  createdBy?: UserUserInfoCard;

  @SpeakeasyMetadata()
  dateBanned?: Date;

  @SpeakeasyMetadata()
  dateExpires?: Date;

  @SpeakeasyMetadata()
  destinyUserInfo?: GroupsV2GroupUserInfoCard;

  @SpeakeasyMetadata()
  groupId?: number;

  @SpeakeasyMetadata()
  lastModifiedBy?: UserUserInfoCard;
}
