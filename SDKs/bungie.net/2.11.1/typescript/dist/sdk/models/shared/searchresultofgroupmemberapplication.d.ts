import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupMemberApplication } from "./groupsv2groupmemberapplication";
export declare class SearchResultOfGroupMemberApplication extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupMemberApplication[];
    totalResults?: number;
    useTotalResults?: boolean;
}
