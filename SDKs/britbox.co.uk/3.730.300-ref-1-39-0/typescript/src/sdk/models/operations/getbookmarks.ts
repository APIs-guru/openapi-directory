import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBookmarksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetBookmarksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetBookmarksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBookmarksQueryParams;

  @SpeakeasyMetadata()
  security: GetBookmarksSecurity;
}


export class GetBookmarksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBookmarks200ApplicationJsonObject?: Map<string, Date>;
}
