import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAddonSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteAddonSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteAddonSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteAddonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteAddonSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteAddonSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteAddonSecurityOption3;
}


export class DeleteAddonRequest extends SpeakeasyBase {
  @Metadata()
  security: DeleteAddonSecurity;
}


export class DeleteAddonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
