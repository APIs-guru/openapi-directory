import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupMembership } from "./groupsv2groupmembership";



export class GroupsV2GetGroupsForMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  areAllMembershipsInactive?: Map<string, boolean>;

  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: GroupsV2GroupMembership })
  results?: GroupsV2GroupMembership[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}
