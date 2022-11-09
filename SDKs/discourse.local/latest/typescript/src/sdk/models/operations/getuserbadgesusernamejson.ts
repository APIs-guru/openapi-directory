import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserBadgesUsernameJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserBadgesUsernameJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserBadgesUsernameJsonPathParams;
}


export class GetUserBadgesUsernameJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserBadgesUsernameJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
