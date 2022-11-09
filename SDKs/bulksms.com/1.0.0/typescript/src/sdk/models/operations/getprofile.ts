import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetProfileRequest extends SpeakeasyBase {
  @Metadata()
  security: GetProfileSecurity;
}


export class GetProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  profile?: shared.Profile;

  @Metadata()
  statusCode: number;
}
