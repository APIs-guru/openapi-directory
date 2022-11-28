import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddPluginRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=npmName" })
  npmName: string;
}


export class AddPluginRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}


export class AddPluginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddPluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: AddPluginSecurity;
}


export class AddPluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
