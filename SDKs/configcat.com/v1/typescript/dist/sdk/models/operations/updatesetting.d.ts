import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateSettingPathParams extends SpeakeasyBase {
    settingId: number;
}
export declare class UpdateSettingRequests extends SpeakeasyBase {
    operations?: shared.Operation[];
    operations1?: shared.Operation[];
    operations2?: shared.Operation[];
    operations3?: shared.Operation[];
}
export declare class UpdateSettingRequest extends SpeakeasyBase {
    pathParams: UpdateSettingPathParams;
    request: UpdateSettingRequests;
}
export declare class UpdateSettingResponse extends SpeakeasyBase {
    contentType: string;
    settingModel?: shared.SettingModel;
    settingModelHaljson?: shared.SettingModelHaljson;
    statusCode: number;
}
