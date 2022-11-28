import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemBookmarkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetItemBookmarkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItemBookmarkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetItemBookmarkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemBookmarkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetItemBookmarkQueryParams;

  @SpeakeasyMetadata()
  security: GetItemBookmarkSecurity;
}


export class GetItemBookmarkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bookmark?: shared.Bookmark;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
