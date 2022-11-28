import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupMember } from "./groupsv2groupmember";
export declare class SearchResultOfGroupMember extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupMember[];
    totalResults?: number;
    useTotalResults?: boolean;
}
