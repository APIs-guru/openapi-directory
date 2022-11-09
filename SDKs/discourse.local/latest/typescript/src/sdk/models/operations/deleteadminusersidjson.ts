import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdminUsersIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdminUsersIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdminUsersIdJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class DeleteAdminUsersIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAdminUsersIdJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
