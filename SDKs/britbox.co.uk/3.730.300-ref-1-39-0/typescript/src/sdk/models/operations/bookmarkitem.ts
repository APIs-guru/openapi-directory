import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookmarkItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class BookmarkItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class BookmarkItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class BookmarkItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BookmarkItemPathParams;

  @SpeakeasyMetadata()
  queryParams: BookmarkItemQueryParams;

  @SpeakeasyMetadata()
  security: BookmarkItemSecurity;
}


export class BookmarkItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookmark?: shared.Bookmark;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
