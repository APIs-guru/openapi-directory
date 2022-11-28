import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { TrendingTrendingEntry } from "./trendingtrendingentry";



export class SearchResultOfTrendingEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: TrendingTrendingEntry })
  results?: TrendingTrendingEntry[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}
