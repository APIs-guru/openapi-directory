import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAddonSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutAddonSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutAddonSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutAddonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutAddonSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutAddonSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutAddonSecurityOption3;
}


export class PutAddonRequest extends SpeakeasyBase {
  @Metadata()
  security: PutAddonSecurity;
}


export class PutAddonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
