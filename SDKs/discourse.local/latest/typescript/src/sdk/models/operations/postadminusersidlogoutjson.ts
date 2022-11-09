import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminUsersIdLogOutJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostAdminUsersIdLogOutJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAdminUsersIdLogOutJsonPathParams;
}


export class PostAdminUsersIdLogOutJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminUsersIdLogOutJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
