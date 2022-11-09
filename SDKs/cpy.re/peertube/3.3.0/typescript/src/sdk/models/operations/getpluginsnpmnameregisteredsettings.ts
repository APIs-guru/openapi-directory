import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPluginsNpmNameRegisteredSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class GetPluginsNpmNameRegisteredSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetPluginsNpmNameRegisteredSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginsNpmNameRegisteredSettingsPathParams;

  @Metadata()
  security: GetPluginsNpmNameRegisteredSettingsSecurity;
}


export class GetPluginsNpmNameRegisteredSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPluginsNpmNameRegisteredSettings200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
