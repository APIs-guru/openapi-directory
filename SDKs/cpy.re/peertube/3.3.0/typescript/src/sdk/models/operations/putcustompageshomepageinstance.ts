import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCustomPagesHomepageInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;
}


export class PutCustomPagesHomepageInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutCustomPagesHomepageInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PutCustomPagesHomepageInstanceRequestBody;

  @Metadata()
  security: PutCustomPagesHomepageInstanceSecurity;
}


export class PutCustomPagesHomepageInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
