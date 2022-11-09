import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutUUsernamePreferencesEmailJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutUUsernamePreferencesEmailJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUUsernamePreferencesEmailJsonPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutUUsernamePreferencesEmailJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
