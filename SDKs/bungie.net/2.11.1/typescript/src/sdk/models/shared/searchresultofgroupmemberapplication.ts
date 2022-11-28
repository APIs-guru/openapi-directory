import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupMemberApplication } from "./groupsv2groupmemberapplication";



export class SearchResultOfGroupMemberApplication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: GroupsV2GroupMemberApplication })
  results?: GroupsV2GroupMemberApplication[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}
