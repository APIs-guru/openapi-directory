import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDeletedSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class GetDeletedSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeletedSettingsPathParams;
}


export class GetDeletedSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SettingModelHaljson })
  settingModelHaljsons?: shared.SettingModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.SettingModel })
  settingModels?: shared.SettingModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
