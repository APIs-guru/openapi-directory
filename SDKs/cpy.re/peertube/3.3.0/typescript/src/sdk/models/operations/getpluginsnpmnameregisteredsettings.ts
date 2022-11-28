import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPluginsNpmNameRegisteredSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class GetPluginsNpmNameRegisteredSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPluginsNpmNameRegisteredSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPluginsNpmNameRegisteredSettingsPathParams;

  @SpeakeasyMetadata()
  security: GetPluginsNpmNameRegisteredSettingsSecurity;
}


export class GetPluginsNpmNameRegisteredSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPluginsNpmNameRegisteredSettings200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
