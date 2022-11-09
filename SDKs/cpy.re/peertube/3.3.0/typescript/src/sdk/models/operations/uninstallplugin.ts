import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UninstallPluginRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=npmName" })
  npmName: string;
}


export class UninstallPluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UninstallPluginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: UninstallPluginRequestBody;

  @Metadata()
  security: UninstallPluginSecurity;
}


export class UninstallPluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
