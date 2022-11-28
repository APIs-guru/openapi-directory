import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupMembership } from "./groupsv2groupmembership";
export declare class GroupsV2GetGroupsForMemberResponse extends SpeakeasyBase {
    areAllMembershipsInactive?: Map<string, boolean>;
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupMembership[];
    totalResults?: number;
    useTotalResults?: boolean;
}
