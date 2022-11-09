import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddonLinkersLinkerKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class GetAddonLinkersLinkerKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetAddonLinkersLinkerKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetAddonLinkersLinkerKeySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetAddonLinkersLinkerKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAddonLinkersLinkerKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAddonLinkersLinkerKeySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetAddonLinkersLinkerKeySecurityOption3;
}


export class GetAddonLinkersLinkerKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddonLinkersLinkerKeyPathParams;

  @Metadata()
  security: GetAddonLinkersLinkerKeySecurity;
}


export class GetAddonLinkersLinkerKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
