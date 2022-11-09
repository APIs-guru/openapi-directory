import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class PostAddonLinkersLinkerKeyValuesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostAddonLinkersLinkerKeyValuesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostAddonLinkersLinkerKeyValuesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostAddonLinkersLinkerKeyValuesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostAddonLinkersLinkerKeyValuesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostAddonLinkersLinkerKeyValuesSecurityOption3;
}


export class PostAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAddonLinkersLinkerKeyValuesPathParams;

  @Metadata()
  security: PostAddonLinkersLinkerKeyValuesSecurity;
}


export class PostAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
