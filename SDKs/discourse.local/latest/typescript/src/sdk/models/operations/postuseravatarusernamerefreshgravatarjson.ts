import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUserAvatarUsernameRefreshGravatarJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostUserAvatarUsernameRefreshGravatarJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserAvatarUsernameRefreshGravatarJsonPathParams;
}


export class PostUserAvatarUsernameRefreshGravatarJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postUserAvatarUsernameRefreshGravatarJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
