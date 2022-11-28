import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchperpackageMatchModeEnum {
    Literal = "literal",
    Regexp = "regexp"
}


export class SearchperpackageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match_mode" })
  matchMode?: SearchperpackageMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class SearchperpackageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class SearchperpackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchperpackageQueryParams;

  @SpeakeasyMetadata()
  security: SearchperpackageSecurity;
}


export class SearchperpackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PackageSearchResult })
  packageSearchResults?: shared.PackageSearchResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
