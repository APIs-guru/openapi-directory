import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddonLinkersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetAddonLinkersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetAddonLinkersSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetAddonLinkersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAddonLinkersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAddonLinkersSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetAddonLinkersSecurityOption3;
}


export class GetAddonLinkersRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAddonLinkersSecurity;
}


export class GetAddonLinkersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
