import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupMappingGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_description" })
  groupDescription: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=group_name" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=synced_at" })
  syncedAt?: string;
}


// GroupMapping
/** 
 * External Groups to be mapped to a team for membership
**/
export class GroupMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: GroupMappingGroups })
  groups?: GroupMappingGroups[];
}
