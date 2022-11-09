import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class CreateSettingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createSettingModel?: shared.CreateSettingModel;

  @Metadata({ data: "request, media_type=application/json" })
  createSettingModel1?: shared.CreateSettingModel;

  @Metadata({ data: "request, media_type=text/json" })
  createSettingModel2?: shared.CreateSettingModel;
}


export class CreateSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSettingPathParams;

  @Metadata()
  request: CreateSettingRequests;
}


export class CreateSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingModel?: shared.SettingModel;

  @Metadata()
  settingModelHaljson?: shared.SettingModelHaljson;

  @Metadata()
  statusCode: number;
}
