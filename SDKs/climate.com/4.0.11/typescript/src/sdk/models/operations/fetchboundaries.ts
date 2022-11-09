import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchBoundariesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchBoundariesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchBoundariesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchBoundariesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchBoundariesSecurityOption2;
}


export class FetchBoundariesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BoundariesQuery;

  @Metadata()
  security: FetchBoundariesSecurity;
}


export class FetchBoundariesResponse extends SpeakeasyBase {
  @Metadata()
  boundaries?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
