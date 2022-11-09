import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookmarkItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class BookmarkItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class BookmarkItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class BookmarkItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BookmarkItemPathParams;

  @Metadata()
  queryParams: BookmarkItemQueryParams;

  @Metadata()
  security: BookmarkItemSecurity;
}


export class BookmarkItemResponse extends SpeakeasyBase {
  @Metadata()
  bookmark?: shared.Bookmark;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
