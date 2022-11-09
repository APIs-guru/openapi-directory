import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemBookmarkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetItemBookmarkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItemBookmarkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetItemBookmarkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemBookmarkPathParams;

  @Metadata()
  queryParams: GetItemBookmarkQueryParams;

  @Metadata()
  security: GetItemBookmarkSecurity;
}


export class GetItemBookmarkResponse extends SpeakeasyBase {
  @Metadata()
  bookmark?: shared.Bookmark;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
