import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchMatchModeEnum {
    Literal = "literal"
,    Regexp = "regexp"
}


export class SearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=match_mode" })
  matchMode?: SearchMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchQueryParams;

  @Metadata()
  security: SearchSecurity;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SearchResult })
  searchResults?: shared.SearchResult[];

  @Metadata()
  statusCode: number;
}
