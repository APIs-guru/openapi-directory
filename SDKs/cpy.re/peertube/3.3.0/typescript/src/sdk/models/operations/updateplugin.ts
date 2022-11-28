import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePluginRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=npmName" })
  npmName: string;
}


export class UpdatePluginRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}


export class UpdatePluginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdatePluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: UpdatePluginSecurity;
}


export class UpdatePluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
