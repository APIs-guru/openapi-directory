import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";



export class GroupsV2GroupMemberApplication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUserInfo?: UserUserInfoCard;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  destinyUserInfo?: GroupsV2GroupUserInfoCard;

  @SpeakeasyMetadata()
  groupId?: number;

  @SpeakeasyMetadata()
  requestMessage?: string;

  @SpeakeasyMetadata()
  resolveDate?: Date;

  @SpeakeasyMetadata()
  resolveMessage?: string;

  @SpeakeasyMetadata()
  resolveState?: number;

  @SpeakeasyMetadata()
  resolvedByMembershipId?: number;
}
