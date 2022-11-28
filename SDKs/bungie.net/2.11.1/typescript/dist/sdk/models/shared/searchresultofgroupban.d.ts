import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupBan } from "./groupsv2groupban";
export declare class SearchResultOfGroupBan extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupBan[];
    totalResults?: number;
    useTotalResults?: boolean;
}
