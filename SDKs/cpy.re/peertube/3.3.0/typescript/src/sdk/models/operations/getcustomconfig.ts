import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetCustomConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetCustomConfigSecurity;
}


export class GetCustomConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverConfigCustom?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
