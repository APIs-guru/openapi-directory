import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostServerBlocklistServersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;
}


export class PostServerBlocklistServersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostServerBlocklistServersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServerBlocklistServersRequestBody;

  @Metadata()
  security: PostServerBlocklistServersSecurity;
}


export class PostServerBlocklistServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
