import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingValueBySdkkeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingKeyOrId" })
  settingKeyOrId: string;
}


export class GetSettingValueBySdkkeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CONFIGCAT-SDKKEY" })
  xConfigcatSdkkey: string;
}


export class GetSettingValueBySdkkeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingValueBySdkkeyPathParams;

  @SpeakeasyMetadata()
  headers: GetSettingValueBySdkkeyHeaders;
}


export class GetSettingValueBySdkkeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  settingValueModel?: shared.SettingValueModel;

  @SpeakeasyMetadata()
  settingValueModelHaljson?: shared.SettingValueModelHaljson;

  @SpeakeasyMetadata()
  statusCode: number;
}
