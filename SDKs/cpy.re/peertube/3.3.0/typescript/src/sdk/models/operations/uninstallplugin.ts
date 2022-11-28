import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UninstallPluginRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=npmName" })
  npmName: string;
}


export class UninstallPluginSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UninstallPluginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UninstallPluginRequestBody;

  @SpeakeasyMetadata()
  security: UninstallPluginSecurity;
}


export class UninstallPluginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
