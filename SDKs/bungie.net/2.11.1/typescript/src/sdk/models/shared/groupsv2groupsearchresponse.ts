import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupV2Card } from "./groupsv2groupv2card";



export class GroupsV2GroupSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: GroupsV2GroupV2Card })
  results?: GroupsV2GroupV2Card[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}
