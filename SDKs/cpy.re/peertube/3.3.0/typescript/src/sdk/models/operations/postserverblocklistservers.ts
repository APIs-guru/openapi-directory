import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostServerBlocklistServersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;
}


export class PostServerBlocklistServersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerBlocklistServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostServerBlocklistServersRequestBody;

  @SpeakeasyMetadata()
  security: PostServerBlocklistServersSecurity;
}


export class PostServerBlocklistServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
