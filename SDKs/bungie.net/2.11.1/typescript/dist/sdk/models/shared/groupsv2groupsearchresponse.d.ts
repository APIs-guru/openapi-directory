import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { GroupsV2GroupV2Card } from "./groupsv2groupv2card";
export declare class GroupsV2GroupSearchResponse extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: GroupsV2GroupV2Card[];
    totalResults?: number;
    useTotalResults?: boolean;
}
