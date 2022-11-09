import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsByTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class GetSettingsByTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsByTagPathParams;
}


export class GetSettingsByTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SettingModelHaljson })
  settingModelHaljsons?: shared.SettingModelHaljson[];

  @Metadata({ elemType: shared.SettingModel })
  settingModels?: shared.SettingModel[];

  @Metadata()
  statusCode: number;
}
