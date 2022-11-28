import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAdminBadgesIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAdminBadgesIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAdminBadgesIdJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutAdminBadgesIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAdminBadgesIdJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
