import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddonLinkersLinkerKeyValuesValueIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class GetAddonLinkersLinkerKeyValuesValueIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetAddonLinkersLinkerKeyValuesValueIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetAddonLinkersLinkerKeyValuesValueIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetAddonLinkersLinkerKeyValuesValueIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAddonLinkersLinkerKeyValuesValueIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAddonLinkersLinkerKeyValuesValueIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetAddonLinkersLinkerKeyValuesValueIdSecurityOption3;
}


export class GetAddonLinkersLinkerKeyValuesValueIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddonLinkersLinkerKeyValuesValueIdPathParams;

  @Metadata()
  security: GetAddonLinkersLinkerKeyValuesValueIdSecurity;
}


export class GetAddonLinkersLinkerKeyValuesValueIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
