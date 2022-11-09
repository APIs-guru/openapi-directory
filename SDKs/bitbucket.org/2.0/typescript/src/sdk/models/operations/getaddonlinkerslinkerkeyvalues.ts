import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class GetAddonLinkersLinkerKeyValuesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetAddonLinkersLinkerKeyValuesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetAddonLinkersLinkerKeyValuesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAddonLinkersLinkerKeyValuesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAddonLinkersLinkerKeyValuesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetAddonLinkersLinkerKeyValuesSecurityOption3;
}


export class GetAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddonLinkersLinkerKeyValuesPathParams;

  @Metadata()
  security: GetAddonLinkersLinkerKeyValuesSecurity;
}


export class GetAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
