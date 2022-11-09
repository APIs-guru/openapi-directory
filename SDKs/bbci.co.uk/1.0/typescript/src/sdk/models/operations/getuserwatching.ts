import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserWatchingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=identity_cookie" })
  identityCookie: number;
}


export class GetUserWatchingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserWatchingQueryParams;
}


export class GetUserWatchingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
