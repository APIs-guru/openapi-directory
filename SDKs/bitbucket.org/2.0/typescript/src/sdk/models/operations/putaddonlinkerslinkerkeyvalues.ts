import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class PutAddonLinkersLinkerKeyValuesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutAddonLinkersLinkerKeyValuesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutAddonLinkersLinkerKeyValuesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutAddonLinkersLinkerKeyValuesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutAddonLinkersLinkerKeyValuesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutAddonLinkersLinkerKeyValuesSecurityOption3;
}


export class PutAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAddonLinkersLinkerKeyValuesPathParams;

  @Metadata()
  security: PutAddonLinkersLinkerKeyValuesSecurity;
}


export class PutAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
