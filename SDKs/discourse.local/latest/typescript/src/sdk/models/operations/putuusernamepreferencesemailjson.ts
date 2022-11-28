import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUUsernamePreferencesEmailJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutUUsernamePreferencesEmailJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUUsernamePreferencesEmailJsonPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutUUsernamePreferencesEmailJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
