import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class GetSettingValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingValuePathParams;
}


export class GetSettingValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingValueModel?: shared.SettingValueModel;

  @SpeakeasyMetadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
