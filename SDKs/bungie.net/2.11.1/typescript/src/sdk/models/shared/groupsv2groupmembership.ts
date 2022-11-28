import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupV2 } from "./groupsv2groupv2";
import { GroupsV2GroupMember } from "./groupsv2groupmember";



export class GroupsV2GroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: GroupsV2GroupV2;

  @SpeakeasyMetadata()
  member?: GroupsV2GroupMember;
}
