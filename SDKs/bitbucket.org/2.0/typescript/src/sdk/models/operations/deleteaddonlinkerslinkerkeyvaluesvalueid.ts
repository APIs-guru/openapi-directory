import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAddonLinkersLinkerKeyValuesValueIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAddonLinkersLinkerKeyValuesValueIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteAddonLinkersLinkerKeyValuesValueIdSecurity;
}


export class DeleteAddonLinkersLinkerKeyValuesValueIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
