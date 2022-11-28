import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAdminUsersIdAnonymizeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutAdminUsersIdAnonymizeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAdminUsersIdAnonymizeJsonPathParams;
}


export class PutAdminUsersIdAnonymizeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAdminUsersIdAnonymizeJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
