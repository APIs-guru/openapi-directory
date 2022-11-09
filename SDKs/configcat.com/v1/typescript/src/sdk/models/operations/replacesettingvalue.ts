import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceSettingValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class ReplaceSettingValueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class ReplaceSettingValueRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateSettingValueModel?: shared.UpdateSettingValueModel;

  @Metadata({ data: "request, media_type=application/json" })
  updateSettingValueModel1?: shared.UpdateSettingValueModel;

  @Metadata({ data: "request, media_type=text/json" })
  updateSettingValueModel2?: shared.UpdateSettingValueModel;
}


export class ReplaceSettingValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceSettingValuePathParams;

  @Metadata()
  queryParams: ReplaceSettingValueQueryParams;

  @Metadata()
  request: ReplaceSettingValueRequests;
}


export class ReplaceSettingValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingValueModel?: shared.SettingValueModel;

  @Metadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @Metadata()
  statusCode: number;
}
