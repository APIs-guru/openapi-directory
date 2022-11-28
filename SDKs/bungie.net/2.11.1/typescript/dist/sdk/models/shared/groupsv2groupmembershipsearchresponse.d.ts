import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupMembership } from "./groupsv2groupmembership";
export declare class GroupsV2GroupMembershipSearchResponse extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupMembership[];
    totalResults?: number;
    useTotalResults?: boolean;
}
