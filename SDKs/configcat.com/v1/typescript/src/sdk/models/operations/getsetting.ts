import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class GetSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingPathParams;
}


export class GetSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingModel?: shared.SettingModel;

  @SpeakeasyMetadata()
  settingModelHaljson?: shared.SettingModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
