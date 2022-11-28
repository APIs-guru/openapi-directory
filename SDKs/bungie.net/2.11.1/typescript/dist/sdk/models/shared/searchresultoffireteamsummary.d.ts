import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { FireteamFireteamSummary } from "./fireteamfireteamsummary";
export declare class SearchResultOfFireteamSummary extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: FireteamFireteamSummary[];
    totalResults?: number;
    useTotalResults?: boolean;
}
