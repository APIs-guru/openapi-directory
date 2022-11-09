import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupMappingGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_description" })
  groupDescription: string;

  @Metadata({ data: "json, name=group_id" })
  groupId: string;

  @Metadata({ data: "json, name=group_name" })
  groupName: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=synced_at" })
  syncedAt?: string;
}


// GroupMapping
/** 
 * External Groups to be mapped to a team for membership
**/
export class GroupMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.GroupMappingGroups })
  groups?: GroupMappingGroups[];
}
