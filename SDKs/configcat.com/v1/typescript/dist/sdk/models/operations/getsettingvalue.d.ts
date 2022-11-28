import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingValuePathParams extends SpeakeasyBase {
    environmentId: string;
    settingId: number;
}
export declare class GetSettingValueRequest extends SpeakeasyBase {
    pathParams: GetSettingValuePathParams;
}
export declare class GetSettingValueResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
}
