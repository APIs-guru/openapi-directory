import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupMember } from "./groupsv2groupmember";
import { GroupsV2GroupPotentialMember } from "./groupsv2grouppotentialmember";
import { GroupsV2GroupV2 } from "./groupsv2groupv2";



export class GroupsV2GroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allianceStatus?: number;

  @SpeakeasyMetadata()
  alliedIds?: number[];

  @SpeakeasyMetadata({ elemType: GroupsV2GroupMember })
  currentUserMemberMap?: Map<string, GroupsV2GroupMember>;

  @SpeakeasyMetadata()
  currentUserMembershipsInactiveForDestiny?: boolean;

  @SpeakeasyMetadata({ elemType: GroupsV2GroupPotentialMember })
  currentUserPotentialMemberMap?: Map<string, GroupsV2GroupPotentialMember>;

  @SpeakeasyMetadata()
  detail?: GroupsV2GroupV2;

  @SpeakeasyMetadata()
  founder?: GroupsV2GroupMember;

  @SpeakeasyMetadata()
  groupJoinInviteCount?: number;

  @SpeakeasyMetadata()
  parentGroup?: GroupsV2GroupV2;
}
