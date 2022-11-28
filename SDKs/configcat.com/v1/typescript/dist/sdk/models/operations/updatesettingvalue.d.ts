import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSettingValuePathParams extends SpeakeasyBase {
    environmentId: string;
    settingId: number;
}
export declare class UpdateSettingValueQueryParams extends SpeakeasyBase {
    reason?: string;
}
export declare class UpdateSettingValueRequests extends SpeakeasyBase {
    operations?: shared.Operation[];
    operations1?: shared.Operation[];
    operations2?: shared.Operation[];
    operations3?: shared.Operation[];
}
export declare class UpdateSettingValueRequest extends SpeakeasyBase {
    pathParams: UpdateSettingValuePathParams;
    queryParams: UpdateSettingValueQueryParams;
    request: UpdateSettingValueRequests;
}
export declare class UpdateSettingValueResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
}
