import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupPotentialMembership } from "./groupsv2grouppotentialmembership";
export declare class GroupsV2GroupPotentialMembershipSearchResponse extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupPotentialMembership[];
    totalResults?: number;
    useTotalResults?: boolean;
}
