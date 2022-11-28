import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPluginsNpmNameSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class PutPluginsNpmNameSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: Map<string, any>;
}


export class PutPluginsNpmNameSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutPluginsNpmNameSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPluginsNpmNameSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutPluginsNpmNameSettingsRequestBody;

  @SpeakeasyMetadata()
  security: PutPluginsNpmNameSettingsSecurity;
}


export class PutPluginsNpmNameSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
