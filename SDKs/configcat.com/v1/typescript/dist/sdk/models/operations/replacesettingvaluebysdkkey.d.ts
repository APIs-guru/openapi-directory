import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceSettingValueBySdkkeyPathParams extends SpeakeasyBase {
    settingKeyOrId: string;
}
export declare class ReplaceSettingValueBySdkkeyQueryParams extends SpeakeasyBase {
    reason?: string;
}
export declare class ReplaceSettingValueBySdkkeyHeaders extends SpeakeasyBase {
    xConfigcatSdkkey: string;
}
export declare class ReplaceSettingValueBySdkkeyRequests extends SpeakeasyBase {
    updateSettingValueModel?: shared.UpdateSettingValueModel;
    updateSettingValueModel1?: shared.UpdateSettingValueModel;
    updateSettingValueModel2?: shared.UpdateSettingValueModel;
}
export declare class ReplaceSettingValueBySdkkeyRequest extends SpeakeasyBase {
    pathParams: ReplaceSettingValueBySdkkeyPathParams;
    queryParams: ReplaceSettingValueBySdkkeyQueryParams;
    headers: ReplaceSettingValueBySdkkeyHeaders;
    request: ReplaceSettingValueBySdkkeyRequests;
}
export declare class ReplaceSettingValueBySdkkeyResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
}
