import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSettingValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingId" })
  settingId: number;
}


export class UpdateSettingValueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class UpdateSettingValueRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.Operation })
  operations?: shared.Operation[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Operation })
  operations1?: shared.Operation[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation })
  operations2?: shared.Operation[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.Operation })
  operations3?: shared.Operation[];
}


export class UpdateSettingValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSettingValuePathParams;

  @Metadata()
  queryParams: UpdateSettingValueQueryParams;

  @Metadata()
  request: UpdateSettingValueRequests;
}


export class UpdateSettingValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingValueModel?: shared.SettingValueModel;

  @Metadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @Metadata()
  statusCode: number;
}
