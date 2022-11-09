import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPluginsNpmNamePublicSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class GetPluginsNpmNamePublicSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPluginsNpmNamePublicSettingsPathParams;
}


export class GetPluginsNpmNamePublicSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPluginsNpmNamePublicSettings200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
