import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchperpackageMatchModeEnum {
    Literal = "literal"
,    Regexp = "regexp"
}


export class SearchperpackageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=match_mode" })
  matchMode?: SearchperpackageMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchperpackageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class SearchperpackageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchperpackageQueryParams;

  @Metadata()
  security: SearchperpackageSecurity;
}


export class SearchperpackageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PackageSearchResult })
  packageSearchResults?: shared.PackageSearchResult[];

  @Metadata()
  statusCode: number;
}
