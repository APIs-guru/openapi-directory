import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSettingValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class UpdateSettingValueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class UpdateSettingValueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.Operation })
  operations?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Operation })
  operations1?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation })
  operations2?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.Operation })
  operations3?: shared.Operation[];
}


export class UpdateSettingValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSettingValuePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateSettingValueQueryParams;

  @SpeakeasyMetadata()
  request: UpdateSettingValueRequests;
}


export class UpdateSettingValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingValueModel?: shared.SettingValueModel;

  @SpeakeasyMetadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
