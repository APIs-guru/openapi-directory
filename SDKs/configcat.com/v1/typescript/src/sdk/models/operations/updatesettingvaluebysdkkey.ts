import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSettingValueBySdkkeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" })
  settingKeyOrId: string;
}


export class UpdateSettingValueBySdkkeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class UpdateSettingValueBySdkkeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" })
  xConfigcatSdkkey: string;
}


export class UpdateSettingValueBySdkkeyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.Operation })
  operations?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Operation })
  operations1?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.Operation })
  operations2?: shared.Operation[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.Operation })
  operations3?: shared.Operation[];
}


export class UpdateSettingValueBySdkkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSettingValueBySdkkeyPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateSettingValueBySdkkeyQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateSettingValueBySdkkeyHeaders;

  @SpeakeasyMetadata()
  request: UpdateSettingValueBySdkkeyRequests;
}


export class UpdateSettingValueBySdkkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingValueModel?: shared.SettingValueModel;

  @SpeakeasyMetadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
