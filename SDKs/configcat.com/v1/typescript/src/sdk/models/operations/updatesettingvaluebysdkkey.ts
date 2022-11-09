import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSettingValueBySdkkeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" })
  settingKeyOrId: string;
}


export class UpdateSettingValueBySdkkeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class UpdateSettingValueBySdkkeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" })
  xConfigcatSdkkey: string;
}


export class UpdateSettingValueBySdkkeyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.Operation })
  operations?: shared.Operation[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Operation })
  operations1?: shared.Operation[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation })
  operations2?: shared.Operation[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.Operation })
  operations3?: shared.Operation[];
}


export class UpdateSettingValueBySdkkeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSettingValueBySdkkeyPathParams;

  @Metadata()
  queryParams: UpdateSettingValueBySdkkeyQueryParams;

  @Metadata()
  headers: UpdateSettingValueBySdkkeyHeaders;

  @Metadata()
  request: UpdateSettingValueBySdkkeyRequests;
}


export class UpdateSettingValueBySdkkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingValueModel?: shared.SettingValueModel;

  @Metadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @Metadata()
  statusCode: number;
}
