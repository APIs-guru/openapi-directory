import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminUsersIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAdminUsersIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdminUsersIdJsonPathParams;
}


export class GetAdminUsersIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAdminUsersIdJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
