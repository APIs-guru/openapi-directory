import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceSettingValueBySdkkeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" })
  settingKeyOrId: string;
}


export class ReplaceSettingValueBySdkkeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class ReplaceSettingValueBySdkkeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" })
  xConfigcatSdkkey: string;
}


export class ReplaceSettingValueBySdkkeyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updateSettingValueModel?: shared.UpdateSettingValueModel;

  @Metadata({ data: "request, media_type=application/json" })
  updateSettingValueModel1?: shared.UpdateSettingValueModel;

  @Metadata({ data: "request, media_type=text/json" })
  updateSettingValueModel2?: shared.UpdateSettingValueModel;
}


export class ReplaceSettingValueBySdkkeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceSettingValueBySdkkeyPathParams;

  @Metadata()
  queryParams: ReplaceSettingValueBySdkkeyQueryParams;

  @Metadata()
  headers: ReplaceSettingValueBySdkkeyHeaders;

  @Metadata()
  request: ReplaceSettingValueBySdkkeyRequests;
}


export class ReplaceSettingValueBySdkkeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  settingValueModel?: shared.SettingValueModel;

  @Metadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @Metadata()
  statusCode: number;
}
