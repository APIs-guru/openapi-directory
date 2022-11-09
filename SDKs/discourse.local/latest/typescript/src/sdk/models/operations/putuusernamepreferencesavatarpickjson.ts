import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutUUsernamePreferencesAvatarPickJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutUUsernamePreferencesAvatarPickJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUUsernamePreferencesAvatarPickJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutUUsernamePreferencesAvatarPickJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putUUsernamePreferencesAvatarPickJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
