import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserWatchingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identity_cookie" })
  identityCookie: number;
}


export class GetUserWatchingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserWatchingQueryParams;
}


export class GetUserWatchingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
