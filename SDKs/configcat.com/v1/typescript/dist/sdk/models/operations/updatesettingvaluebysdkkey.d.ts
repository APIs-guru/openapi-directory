import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSettingValueBySdkkeyPathParams extends SpeakeasyBase {
    settingKeyOrId: string;
}
export declare class UpdateSettingValueBySdkkeyQueryParams extends SpeakeasyBase {
    reason?: string;
}
export declare class UpdateSettingValueBySdkkeyHeaders extends SpeakeasyBase {
    xConfigcatSdkkey: string;
}
export declare class UpdateSettingValueBySdkkeyRequests extends SpeakeasyBase {
    operations?: shared.Operation[];
    operations1?: shared.Operation[];
    operations2?: shared.Operation[];
    operations3?: shared.Operation[];
}
export declare class UpdateSettingValueBySdkkeyRequest extends SpeakeasyBase {
    pathParams: UpdateSettingValueBySdkkeyPathParams;
    queryParams: UpdateSettingValueBySdkkeyQueryParams;
    headers: UpdateSettingValueBySdkkeyHeaders;
    request: UpdateSettingValueBySdkkeyRequests;
}
export declare class UpdateSettingValueBySdkkeyResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
}
