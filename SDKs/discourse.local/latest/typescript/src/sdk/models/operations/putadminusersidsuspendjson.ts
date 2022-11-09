import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAdminUsersIdSuspendJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAdminUsersIdSuspendJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAdminUsersIdSuspendJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutAdminUsersIdSuspendJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putAdminUsersIdSuspendJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
