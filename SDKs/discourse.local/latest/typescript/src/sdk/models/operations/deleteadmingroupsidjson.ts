import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdminGroupsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAdminGroupsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdminGroupsIdJsonPathParams;
}


export class DeleteAdminGroupsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAdminGroupsIdJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
