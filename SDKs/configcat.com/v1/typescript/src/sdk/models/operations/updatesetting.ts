import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class UpdateSettingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.Operation })
  operations?: shared.Operation[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Operation })
  operations1?: shared.Operation[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation })
  operations2?: shared.Operation[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.Operation })
  operations3?: shared.Operation[];
}


export class UpdateSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSettingPathParams;

  @Metadata()
  request: UpdateSettingRequests;
}


export class UpdateSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingModel?: shared.SettingModel;

  @Metadata()
  settingModelHaljson?: shared.SettingModelHaljson;

  @Metadata()
  statusCode: number;
}
