import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlayerSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class PlayerSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PlayerSearchQueryParams;
}


export class PlayerSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayerSearchResult })
  playerSearchResults?: shared.PlayerSearchResult[];

  @Metadata()
  statusCode: number;
}
