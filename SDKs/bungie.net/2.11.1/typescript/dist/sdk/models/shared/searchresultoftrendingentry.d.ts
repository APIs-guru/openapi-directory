import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { TrendingTrendingEntry } from "./trendingtrendingentry";
export declare class SearchResultOfTrendingEntry extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: TrendingTrendingEntry[];
    totalResults?: number;
    useTotalResults?: boolean;
}
