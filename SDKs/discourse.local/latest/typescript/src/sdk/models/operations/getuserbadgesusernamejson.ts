import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserBadgesUsernameJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUserBadgesUsernameJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserBadgesUsernameJsonPathParams;
}


export class GetUserBadgesUsernameJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserBadgesUsernameJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
