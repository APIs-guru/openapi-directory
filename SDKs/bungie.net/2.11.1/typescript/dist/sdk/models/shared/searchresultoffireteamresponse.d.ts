import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { FireteamFireteamResponse } from "./fireteamfireteamresponse";
export declare class SearchResultOfFireteamResponse extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: FireteamFireteamResponse[];
    totalResults?: number;
    useTotalResults?: boolean;
}
