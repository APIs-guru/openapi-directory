import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUUsernamePreferencesAvatarPickJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutUUsernamePreferencesAvatarPickJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUUsernamePreferencesAvatarPickJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutUUsernamePreferencesAvatarPickJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putUUsernamePreferencesAvatarPickJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
