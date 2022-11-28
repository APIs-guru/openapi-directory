import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsByTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class GetSettingsByTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsByTagPathParams;
}


export class GetSettingsByTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SettingModelHaljson })
  settingModelHaljsons?: shared.SettingModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.SettingModel })
  settingModels?: shared.SettingModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
