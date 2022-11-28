import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";



export class GroupsV2GroupMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUserInfo?: UserUserInfoCard;

  @SpeakeasyMetadata()
  destinyUserInfo?: GroupsV2GroupUserInfoCard;

  @SpeakeasyMetadata()
  groupId?: number;

  @SpeakeasyMetadata()
  isOnline?: boolean;

  @SpeakeasyMetadata()
  joinDate?: Date;

  @SpeakeasyMetadata()
  lastOnlineStatusChange?: number;

  @SpeakeasyMetadata()
  memberType?: number;
}
