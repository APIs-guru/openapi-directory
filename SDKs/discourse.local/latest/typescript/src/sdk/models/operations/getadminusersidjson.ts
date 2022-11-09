import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminUsersIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAdminUsersIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdminUsersIdJsonPathParams;
}


export class GetAdminUsersIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAdminUsersIdJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
