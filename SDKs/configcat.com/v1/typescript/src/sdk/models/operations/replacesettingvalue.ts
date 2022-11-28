import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceSettingValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class ReplaceSettingValueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class ReplaceSettingValueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateSettingValueModel?: shared.UpdateSettingValueModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSettingValueModel1?: shared.UpdateSettingValueModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSettingValueModel2?: shared.UpdateSettingValueModel;
}


export class ReplaceSettingValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceSettingValuePathParams;

  @SpeakeasyMetadata()
  queryParams: ReplaceSettingValueQueryParams;

  @SpeakeasyMetadata()
  request: ReplaceSettingValueRequests;
}


export class ReplaceSettingValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingValueModel?: shared.SettingValueModel;

  @SpeakeasyMetadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
