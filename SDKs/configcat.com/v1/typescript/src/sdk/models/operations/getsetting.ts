import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class GetSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingPathParams;
}


export class GetSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingModel?: shared.SettingModel;

  @Metadata()
  settingModelHaljson?: shared.SettingModelHaljson;

  @Metadata()
  statusCode: number;
}
