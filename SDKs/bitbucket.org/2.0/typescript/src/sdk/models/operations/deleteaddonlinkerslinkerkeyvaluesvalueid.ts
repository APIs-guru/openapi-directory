import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAddonLinkersLinkerKeyValuesValueIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteAddonLinkersLinkerKeyValuesValueIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteAddonLinkersLinkerKeyValuesValueIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteAddonLinkersLinkerKeyValuesValueIdSecurityOption3;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAddonLinkersLinkerKeyValuesValueIdPathParams;

  @Metadata()
  security: DeleteAddonLinkersLinkerKeyValuesValueIdSecurity;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
