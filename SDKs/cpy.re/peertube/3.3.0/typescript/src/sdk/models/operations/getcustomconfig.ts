import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetCustomConfigRequest extends SpeakeasyBase {
  @Metadata()
  security: GetCustomConfigSecurity;
}


export class GetCustomConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serverConfigCustom?: any;

  @Metadata()
  statusCode: number;
}
