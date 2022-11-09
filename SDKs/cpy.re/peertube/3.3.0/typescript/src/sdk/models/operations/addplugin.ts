import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddPluginRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=npmName" })
  npmName: string;
}


export class AddPluginRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path: string;
}


export class AddPluginSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddPluginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: AddPluginSecurity;
}


export class AddPluginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
