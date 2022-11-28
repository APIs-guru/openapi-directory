import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAdminUsersIdSuspendJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAdminUsersIdSuspendJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAdminUsersIdSuspendJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutAdminUsersIdSuspendJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAdminUsersIdSuspendJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
