import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUserSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUserSecurityOption3;
}


export class GetUserRequest extends SpeakeasyBase {
  @Metadata()
  security: GetUserSecurity;
}


export class GetUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  user?: Map<string, any>;
}
