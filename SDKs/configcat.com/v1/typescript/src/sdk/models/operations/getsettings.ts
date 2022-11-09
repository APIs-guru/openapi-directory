import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class GetSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsPathParams;
}


export class GetSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SettingModelHaljson })
  settingModelHaljsons?: shared.SettingModelHaljson[];

  @Metadata({ elemType: shared.SettingModel })
  settingModels?: shared.SettingModel[];

  @Metadata()
  statusCode: number;
}
