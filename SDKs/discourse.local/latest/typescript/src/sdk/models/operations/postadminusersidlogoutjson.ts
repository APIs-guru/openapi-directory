import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminUsersIdLogOutJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostAdminUsersIdLogOutJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAdminUsersIdLogOutJsonPathParams;
}


export class PostAdminUsersIdLogOutJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminUsersIdLogOutJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
