import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { DestinyDefinitionsDestinyEntitySearchResultItem } from "./destinydefinitionsdestinyentitysearchresultitem";



// DestinyDefinitionsDestinyEntitySearchResultResults
/** 
 * The items found that are matches/near matches for the searched-for term, sorted by something vaguely resembling "relevance". Hopefully this will get better in the future.
**/
export class DestinyDefinitionsDestinyEntitySearchResultResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: DestinyDefinitionsDestinyEntitySearchResultItem })
  results?: DestinyDefinitionsDestinyEntitySearchResultItem[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}


// DestinyDefinitionsDestinyEntitySearchResult
/** 
 * The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
**/
export class DestinyDefinitionsDestinyEntitySearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  results?: DestinyDefinitionsDestinyEntitySearchResultResults;

  @SpeakeasyMetadata()
  suggestedWords?: string[];
}
