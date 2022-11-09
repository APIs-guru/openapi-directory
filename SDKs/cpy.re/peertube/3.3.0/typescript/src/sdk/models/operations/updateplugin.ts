import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePluginRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=npmName" })
  npmName: string;
}


export class UpdatePluginRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path: string;
}


export class UpdatePluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdatePluginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: UpdatePluginSecurity;
}


export class UpdatePluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
