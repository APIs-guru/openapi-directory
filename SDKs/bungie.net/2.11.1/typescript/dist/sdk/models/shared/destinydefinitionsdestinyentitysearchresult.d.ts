import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { DestinyDefinitionsDestinyEntitySearchResultItem } from "./destinydefinitionsdestinyentitysearchresultitem";
/**
 * The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling "relevance". Hopefully this will get better in the future.
**/
export declare class DestinyDefinitionsDestinyEntitySearchResultResults extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: DestinyDefinitionsDestinyEntitySearchResultItem[];
    totalResults?: number;
    useTotalResults?: boolean;
}
/**
 * The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
**/
export declare class DestinyDefinitionsDestinyEntitySearchResult extends SpeakeasyBase {
    results?: DestinyDefinitionsDestinyEntitySearchResultResults;
    suggestedWords?: string[];
}
