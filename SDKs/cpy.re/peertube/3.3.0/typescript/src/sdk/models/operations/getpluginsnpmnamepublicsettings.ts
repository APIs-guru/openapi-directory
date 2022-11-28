import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPluginsNpmNamePublicSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=npmName" })
  npmName: string;
}


export class GetPluginsNpmNamePublicSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPluginsNpmNamePublicSettingsPathParams;
}


export class GetPluginsNpmNamePublicSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPluginsNpmNamePublicSettings200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
