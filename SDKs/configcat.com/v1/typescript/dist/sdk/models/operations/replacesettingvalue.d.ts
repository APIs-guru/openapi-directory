import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceSettingValuePathParams extends SpeakeasyBase {
    environmentId: string;
    settingId: number;
}
export declare class ReplaceSettingValueQueryParams extends SpeakeasyBase {
    reason?: string;
}
export declare class ReplaceSettingValueRequests extends SpeakeasyBase {
    updateSettingValueModel?: shared.UpdateSettingValueModel;
    updateSettingValueModel1?: shared.UpdateSettingValueModel;
    updateSettingValueModel2?: shared.UpdateSettingValueModel;
}
export declare class ReplaceSettingValueRequest extends SpeakeasyBase {
    pathParams: ReplaceSettingValuePathParams;
    queryParams: ReplaceSettingValueQueryParams;
    request: ReplaceSettingValueRequests;
}
export declare class ReplaceSettingValueResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
}
