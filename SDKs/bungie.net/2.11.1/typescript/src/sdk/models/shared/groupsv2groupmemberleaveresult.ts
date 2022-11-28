import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupV2 } from "./groupsv2groupv2";



export class GroupsV2GroupMemberLeaveResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: GroupsV2GroupV2;

  @SpeakeasyMetadata()
  groupDeleted?: boolean;
}
