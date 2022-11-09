import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSettingsPathParams extends SpeakeasyBase {
    configId: string;
}
export declare class GetSettingsRequest extends SpeakeasyBase {
    pathParams: GetSettingsPathParams;
}
export declare class GetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settingModelHaljsons?: shared.SettingModelHaljson[];
    settingModels?: shared.SettingModel[];
    statusCode: number;
}
