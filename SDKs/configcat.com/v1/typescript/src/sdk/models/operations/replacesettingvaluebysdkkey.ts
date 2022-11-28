import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceSettingValueBySdkkeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" })
  settingKeyOrId: string;
}


export class ReplaceSettingValueBySdkkeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class ReplaceSettingValueBySdkkeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" })
  xConfigcatSdkkey: string;
}


export class ReplaceSettingValueBySdkkeyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updateSettingValueModel?: shared.UpdateSettingValueModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSettingValueModel1?: shared.UpdateSettingValueModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updateSettingValueModel2?: shared.UpdateSettingValueModel;
}


export class ReplaceSettingValueBySdkkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceSettingValueBySdkkeyPathParams;

  @SpeakeasyMetadata()
  queryParams: ReplaceSettingValueBySdkkeyQueryParams;

  @SpeakeasyMetadata()
  headers: ReplaceSettingValueBySdkkeyHeaders;

  @SpeakeasyMetadata()
  request: ReplaceSettingValueBySdkkeyRequests;
}


export class ReplaceSettingValueBySdkkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingValueModel?: shared.SettingValueModel;

  @SpeakeasyMetadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
