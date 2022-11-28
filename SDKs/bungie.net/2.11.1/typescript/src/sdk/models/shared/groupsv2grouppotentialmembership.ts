import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupV2 } from "./groupsv2groupv2";
import { GroupsV2GroupPotentialMember } from "./groupsv2grouppotentialmember";



export class GroupsV2GroupPotentialMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: GroupsV2GroupV2;

  @SpeakeasyMetadata()
  member?: GroupsV2GroupPotentialMember;
}
