import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUserAvatarUsernameRefreshGravatarJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostUserAvatarUsernameRefreshGravatarJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUserAvatarUsernameRefreshGravatarJsonPathParams;
}


export class PostUserAvatarUsernameRefreshGravatarJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postUserAvatarUsernameRefreshGravatarJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
