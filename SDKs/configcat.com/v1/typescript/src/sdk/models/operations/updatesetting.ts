import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class UpdateSettingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.Operation })
  operations?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Operation })
  operations1?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation })
  operations2?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.Operation })
  operations3?: shared.Operation[];
}


export class UpdateSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSettingPathParams;

  @SpeakeasyMetadata()
  request: UpdateSettingRequests;
}


export class UpdateSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingModel?: shared.SettingModel;

  @SpeakeasyMetadata()
  settingModelHaljson?: shared.SettingModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
