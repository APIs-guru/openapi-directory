import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAddonLinkersLinkerKeyValuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class DeleteAddonLinkersLinkerKeyValuesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteAddonLinkersLinkerKeyValuesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteAddonLinkersLinkerKeyValuesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteAddonLinkersLinkerKeyValuesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteAddonLinkersLinkerKeyValuesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteAddonLinkersLinkerKeyValuesSecurityOption3;
}


export class DeleteAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAddonLinkersLinkerKeyValuesPathParams;

  @Metadata()
  security: DeleteAddonLinkersLinkerKeyValuesSecurity;
}


export class DeleteAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
