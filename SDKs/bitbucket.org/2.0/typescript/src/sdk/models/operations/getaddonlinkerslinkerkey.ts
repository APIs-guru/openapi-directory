import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAddonLinkersLinkerKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linker_key" })
  linkerKey: string;
}


export class GetAddonLinkersLinkerKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetAddonLinkersLinkerKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddonLinkersLinkerKeyPathParams;

  @SpeakeasyMetadata()
  security: GetAddonLinkersLinkerKeySecurity;
}


export class GetAddonLinkersLinkerKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
