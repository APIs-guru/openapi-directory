import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSettingValueBySdkkeyPathParams extends SpeakeasyBase {
    settingKeyOrId: string;
}
export declare class GetSettingValueBySdkkeyHeaders extends SpeakeasyBase {
    xConfigcatSdkkey: string;
}
export declare class GetSettingValueBySdkkeyRequest extends SpeakeasyBase {
    pathParams: GetSettingValueBySdkkeyPathParams;
    headers: GetSettingValueBySdkkeyHeaders;
}
export declare class GetSettingValueBySdkkeyResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
}
