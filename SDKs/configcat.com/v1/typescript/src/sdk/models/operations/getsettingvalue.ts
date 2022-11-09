import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class GetSettingValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingValuePathParams;
}


export class GetSettingValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingValueModel?: shared.SettingValueModel;

  @Metadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @Metadata()
  statusCode: number;
}
