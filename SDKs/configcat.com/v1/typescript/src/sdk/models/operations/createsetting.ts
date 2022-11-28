import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: string;
}


export class CreateSettingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createSettingModel?: shared.CreateSettingModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createSettingModel1?: shared.CreateSettingModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createSettingModel2?: shared.CreateSettingModel;
}


export class CreateSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSettingPathParams;

  @SpeakeasyMetadata()
  request: CreateSettingRequests;
}


export class CreateSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingModel?: shared.SettingModel;

  @SpeakeasyMetadata()
  settingModelHaljson?: shared.SettingModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
