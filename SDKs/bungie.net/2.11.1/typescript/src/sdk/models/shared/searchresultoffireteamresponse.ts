import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { FireteamFireteamResponse } from "./fireteamfireteamresponse";



export class SearchResultOfFireteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: FireteamFireteamResponse })
  results?: FireteamFireteamResponse[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}
