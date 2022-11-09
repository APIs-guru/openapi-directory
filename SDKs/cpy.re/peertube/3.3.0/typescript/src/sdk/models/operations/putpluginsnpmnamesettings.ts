import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPluginsNpmNameSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class PutPluginsNpmNameSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings?: Map<string, any>;
}


export class PutPluginsNpmNameSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutPluginsNpmNameSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPluginsNpmNameSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutPluginsNpmNameSettingsRequestBody;

  @Metadata()
  security: PutPluginsNpmNameSettingsSecurity;
}


export class PutPluginsNpmNameSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
