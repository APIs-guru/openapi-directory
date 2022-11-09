import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAdminUsersIdAnonymizeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAdminUsersIdAnonymizeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAdminUsersIdAnonymizeJsonPathParams;
}


export class PutAdminUsersIdAnonymizeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putAdminUsersIdAnonymizeJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
